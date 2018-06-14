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

class AdminLists extends Component {
  render() {
    return (
      <Row>
        <Col xs="12" sm="12" lg="12">
          <Card>
            <CardHeader className="custom-card-header">
              <CardTitle className="mb-0 border-bottom">Opciones </CardTitle>
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
                  <tr>
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
                    <td>1</td>
                    <td>Documento</td>
                    <td>Manuel Pereira</td>
                    <td className="icon-action">
                      <i className="cui-circle-x font-2xl" id="tip-action-1" />
                      <UncontrolledTooltip
                        placement="top"
                        target="tip-action-1"
                      >
                        Eliminar
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <div className="custom-header">
                <CardTitle className="text-muted">Lista Negra </CardTitle>
                <div className="card-header-actions">
                  <Button color="primary" className="btn-square">
                    <i className="icon-plus" />&nbsp;Agregar
                  </Button>
                </div>
              </div>

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
                  <tr>
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
                    <td>1</td>
                    <td>Documento</td>
                    <td>Manuel Pereira</td>
                    <td className="icon-action">
                      <i className="cui-circle-x font-2xl" id="tip-action-2" />
                      <UncontrolledTooltip
                        placement="top"
                        target="tip-action-2"
                      >
                        Eliminar
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

export default AdminLists;
