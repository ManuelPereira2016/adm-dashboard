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
import DefaultLayout from '../../../containers/DefaultLayout';
import { AppSwitch } from '@coreui/react';
import Rating from 'react-rating';

class AdminSettings extends Component {
  render() {
    return (
        <DefaultLayout>
      <Row>
        <Col>
          <Card>
            <CardHeader className="custom-card-header">
              <div className="border-bottom">
                <Row>
                  <Col xs="12" sm="8" lg="9">
                    <CardTitle className="mb-0">Opciones </CardTitle>
                  </Col>
                  <Col xs="12" sm="4" lg="3">
                    <Input
                      type="select"
                      name="selectSm"
                      id="SelectLm"
                      bsSize="sm"
                    >
                      <option value="0">Service</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                      <option value="4">Option #4</option>
                      <option value="5">Option #5</option>
                    </Input>
                  </Col>
                </Row>
              </div>
            </CardHeader>
            <CardBody className="text-dark">
              <Row>
                <Col xs="12" sm="8" lg="6">
                  <Table responsive={true} size="sm" className="table-blank">
                    <thead className="thead-light">
                      <tr>
                        <th />
                        <th className='text-center'>Activa</th>
                        <th className='text-center'>Aleatoria</th>
                        <th className='text-center'>Ponderacion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span>Preguntas</span>
                        </td>
                        <td className='text-center'>
                            <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} checked />
                        </td>
                        <td className='text-center'>
                            <AppSwitch className={'mx-1'} variant={'pill'} color={'primary'} checked />
                        </td>
                        <td className='text-center'>
                            <Rating
                              emptySymbol="fa fa-star-o fa-2x"
                              fullSymbol="fa fa-star fa-2x"
                            />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col xs="12" sm="4" lg="6">
                  <Row className='pt-3 pb-3 pl-3 pr-3'>
                    <Col xs="12" sm="6" lg="3">
                      Cantidad de Preguntas a mostrar
                    </Col>
                    <Col xs="12" sm="6" lg="9">
                      <h1>
                        <Badge color="secondary">11</Badge>
                      </h1>
                    </Col>
                  </Row>
                  <Row className='pt-3 pb-3 pl-3 pr-3'>
                    <Col xs="12" sm="6" lg="3">
                      Tiempo de bloqueo
                    </Col>
                    <Col xs="12" sm="6" lg="9">
                      <h1>
                        <Badge color="secondary">11</Badge>
                      </h1>
                    </Col>
                  </Row>
                  <Row className='pt-3 pb-3 pl-3 pr-3'>
                    <Col xs="12" sm="6" lg="3">
                      Cantidad de intentos
                    </Col>
                    <Col xs="12" sm="6" lg="9">
                      <h1>
                        <Badge color="secondary">11</Badge>
                      </h1>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      </DefaultLayout>
    );
  }
}

export default AdminSettings;
