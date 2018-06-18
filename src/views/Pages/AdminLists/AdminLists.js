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
  UncontrolledTooltip
} from "reactstrap";
import DefaultLayout from "../../../containers/DefaultLayout";
import MDSpinner from "react-md-spinner";

class AdminLists extends Component {
  static propTypes = {
    whiteList: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    blackList: PropTypes.array.isRequired
  };

  renderLoading() {
    if (this.props.isLoading) {
      return (
        <div className="text-center mt-2">
          <MDSpinner size={100} color="#e91e63" />
        </div>
      );
    }
  }

  renderList() {
    return (
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
        <tbody>{this.props.blackList.map(user => this.renderUser(user))}</tbody>
      </Table>
    );
  }

  renderUser(user) {
    return (
      <tr key={`tr_${user.id_usuario}`}>
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
        <td>{user.id_usuario}</td>
        <td>Documento</td>
        <td>{user.nombre + " " + user.apellidos}</td>
        <td className="icon-action">
          <i
            className="cui-circle-x font-2xl"
            id="tip-action-1"
            onClick={() => this.props.onDelete(user.id_usuario)}
          />
          <UncontrolledTooltip placement="top" target="tip-action-1">
            Eliminar
          </UncontrolledTooltip>
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
                    <Button color="primary" className="btn-square">
                      <i className="icon-plus" />&nbsp;Agregar
                    </Button>
                  </div>
                </div>
                {this.renderList(true)}
                <div className="custom-header">
                  <CardTitle className="text-muted">Lista Negra </CardTitle>
                  <div className="card-header-actions">
                    <Button color="primary" className="btn-square">
                      <i className="icon-plus" />&nbsp;Agregar
                    </Button>
                  </div>
                </div>
                {this.renderList(false)}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </DefaultLayout>
    );
  }
}

export default AdminLists;
