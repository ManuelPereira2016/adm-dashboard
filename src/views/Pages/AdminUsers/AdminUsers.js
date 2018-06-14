import React, { Component } from "react";
import PropTypes from 'prop-types';
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
  UncontrolledTooltip
} from "reactstrap";

class AdminUsers extends Component {
    static propTypes = {
        goToHighUserForm: PropTypes.func.isRequired
    }

  render() {
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader className="text-dark">
              <CardTitle className="mb-0">
              Usuarios
              <div className="card-header-actions">
                  <Button color="primary" className="btn-square" onClick={this.props.goToHighUserForm}>
                    <i className="icon-plus"></i>&nbsp;Dar de alta
                  </Button>
              </div>

              </CardTitle>
            </CardHeader>
            <CardBody className="text-dark">
              <Table
                hover={true}
                responsive={true}
                className="table-outline mb-0 d-none d-sm-table"
              >
                <thead className="thead-light">
                  <tr>
                    <th>DNI</th>
                    <th>Nombre</th>
                    <th>Servicio</th>
                    <th>
                        <i className="icon-pencil" id="tip-modify"></i>
                        <UncontrolledTooltip placement="top" target="tip-modify">
                          Modificar
                        </UncontrolledTooltip>
                    </th>
                    <th>
                        <i className="icon-key" id="tip-wipe"></i>
                        <UncontrolledTooltip placement="top" target="tip-wipe">
                          Blanquear clave
                        </UncontrolledTooltip>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30819310</td>
                    <td>Manuel Pereira</td>
                    <td>Servicio</td>
                    <td className='icon-action'>
                        <i className="icon-pencil" id="tip-action-2"></i>
                        <UncontrolledTooltip placement="top" target="tip-action-2">
                          Modificar
                        </UncontrolledTooltip>
                    </td>
                    <td className='icon-action'>
                        <i className="icon-key" id="tip-action-3"></i>
                        <UncontrolledTooltip placement="top" target="tip-action-3">
                          Blanquear clave
                        </UncontrolledTooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default AdminUsers;
