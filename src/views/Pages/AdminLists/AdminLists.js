import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
  Input,
} from "reactstrap";
import DefaultLayout from "../../../containers/DefaultLayout";
import MDSpinner from "react-md-spinner";

class AdminLists extends Component {
  static propTypes = {
    whiteList: PropTypes.array.isRequired,
    blackList: PropTypes.array.isRequired,
    isLoadingBlackList: PropTypes.bool.isRequired,
    isLoadingWhiteList: PropTypes.bool.isRequired,
    isRemoveProcessing: PropTypes.bool.isRequired,
    selectedId: PropTypes.number.isRequired,
    openBlackListModal: PropTypes.func.isRequired,
    openWhiteListModal: PropTypes.func.isRequired,
    removeFromBlackList: PropTypes.func.isRequired,
    removeFromWhiteList: PropTypes.func.isRequired
  };

  onDelete = (isWhite, id) => {
      if (isWhite) {
          this.props.removeFromWhiteList(id);
      }
      else {
          this.props.removeFromBlackList(id);
      }
  }

  renderLoading(isLoading) {
    if (isLoading) {
      return (
        <div className="text-center mt-2">
          <MDSpinner size={100} color="#e91e63" />
        </div>
      );
    }
  }

  renderList(isWhite) {
    let list = isWhite ? this.props.whiteList : this.props.blackList;

    return (
        <div>
      <Table
        hover={true}
        responsive={true}
        className="table-outline mb-0 d-none d-sm-table"
      >
        <thead className="thead-light">
          <tr>
            <th>
              <div className="form-check form-check-inline">
                <Input
                  className="form-check-input"
                  type="checkbox"
                  name="checkbox1"
                  value="option1"
                />
              </div>
            </th>
            <th>id</th>
            <th>Documento</th>
            <th>Nombre y Apellido</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {list.map(user => this.renderUser(isWhite, user))}
        </tbody>
      </Table>
      {!list.length ? this.renderNoList() : null}
      </div>
    );
  }

  renderNoList() {
    return <div className='empty-table'>No se encontraron usuarios dentro de la lista.</div>;
  }

  renderUser(isWhite, user) {
    return (
      <tr key={`tr_${user.ID}`}>
        <td>
          <div className="form-check form-check-inline">
            <Input
              className="form-check-input"
              type="checkbox"
              name="checkbox1"
              value="option1"
            />
          </div>
        </td>
        <td>{user.ID}</td>
        <td>{user.DNI}</td>
        <td>{user.Nombres}</td>
        <td className="icon-action">
          <span onClick={() => this.onDelete(isWhite, user.ID)}>
          {this.props.isRemoveProcessing && this.props.selectedId === user.ID
              ?
              <MDSpinner size={15} className='mr-1' />
              :
              <i
                className="cui-circle-x font-2xl"
                id="tip-action-1"/>
          }
          </span>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <DefaultLayout>
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card>
              <CardHeader className="custom-card-header">
                <CardTitle className="mb-0 border-bottom">Listas </CardTitle>
              </CardHeader>
              <CardBody className="text-dark">
                <div className="custom-header">
                  <CardTitle className="text-muted">Lista Blanca </CardTitle>
                  <div className="card-header-actions">
                    <Button onClick={this.props.openWhiteListModal} color="primary" className="btn-square">
                      <i className="icon-plus" />&nbsp;Agregar
                    </Button>
                  </div>
                </div>
                {this.renderLoading(this.props.isLoadingWhiteList)}
                {!this.props.isLoadingWhiteList ? this.renderList(true) : null}
                <div className="custom-header">
                  <CardTitle className="text-muted">Lista Negra </CardTitle>
                  <div className="card-header-actions">
                  <Button onClick={this.props.openBlackListModal} color="primary" className="btn-square">
                      <i className="icon-plus" />&nbsp;Agregar
                    </Button>
                  </div>
                </div>
                {this.renderLoading(this.props.isLoadingBlackList)}
                {!this.props.isLoadingBlackList ? this.renderList(false) : null}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </DefaultLayout>
    );
  }
}

export default AdminLists;
