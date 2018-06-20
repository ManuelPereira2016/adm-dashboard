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
  UncontrolledAlert,
  Table,
  Input,
  UncontrolledTooltip
} from "reactstrap";
import DefaultLayout from "../../../containers/DefaultLayout";
import { isObjectEmpty } from "../../../utils/utils";
import { AppSwitch } from "@coreui/react";
import MDSpinner from "react-md-spinner";
import Rating from "react-rating";
import Slider from "react-rangeslider";

class AdminSettings extends Component {
  static propTypes = {
    isServicesLoading: PropTypes.bool.isRequired,
    isQuestionsLoading: PropTypes.bool.isRequired,
    percentageValue: PropTypes.number,
    questionsCount: PropTypes.number,
    lockTime: PropTypes.number,
    attemptsCount: PropTypes.number,
    selectedService: PropTypes.string,
    message: PropTypes.string,
    services: PropTypes.array.isRequired,
    questions: PropTypes.object.isRequired,
    onPercentageChange: PropTypes.func.isRequired,
    onPercentageRevanchaChange: PropTypes.func.isRequired,
    onRate: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onGeneralChange: PropTypes.func.isRequired,
    onServiceSelect: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  };

  renderLoading() {
    return (
      <div className="text-center mt-2">
        <MDSpinner size={100} color="#e91e63" />
      </div>
    );
  }

  renderServices() {
    const services = service => (
      <option key={`id_${service.id_servicio}`} value={service.id_servicio}>
        {service.desc_servicio}
      </option>
    );

    return this.props.services.map(service => services(service));
  }

  renderQuestions() {
    const { questions } = this.props;

    let renderable = [];

    const questionsGenerator = (question, id) => (
      <tr key={`id_${id}`}>
        <td>
          <span className="td-responsive">{question.descripcion}</span>
        </td>
        <td className="text-center">
          <AppSwitch
            className={"mx-1"}
            variant={"pill"}
            name="activa"
            onChange={e => this.props.onChange(e, id)}
            color={"primary"}
            checked={question.activa}
          />
        </td>
        <td className="text-center">
          <AppSwitch
            className={"mx-1"}
            variant={"pill"}
            name="revancha"
            onChange={e => this.props.onChange(e, id)}
            color={"primary"}
            checked={question.revancha}
          />
        </td>
        <td className="text-center">
          <AppSwitch
            className={"mx-1"}
            name="aleatoria"
            onChange={e => this.props.onChange(e, id)}
            variant={"pill"}
            color={"primary"}
            checked={question.aleatoria}
          />
        </td>
        <td className="text-center ">
          <Rating
            initialRating={question.ponderacion}
            onChange={value => this.props.onRate(value, id)}
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
          />
        </td>
      </tr>
    );

    for (let question in questions) {
      renderable.push(questionsGenerator(questions[question], question));
    }

    return renderable;
  }

  renderContent() {
    if (this.props.selectedService && !isObjectEmpty(this.props.questions)) {
      return (
        <CardBody className="text-dark">
          <Row>
            <Col xs="12" sm="12" lg="7">
              <Table responsive={true} className="table-blank">
                <thead className="thead-light">
                  <tr>
                    <th />
                    <th className="text-center">Activa</th>
                    <th className="text-center">Revancha</th>
                    <th className="text-center">Aleatoria</th>
                    <th className="text-center">Ponderacion</th>
                  </tr>
                </thead>
                <tbody>{this.renderQuestions()}</tbody>
              </Table>
            </Col>
            {this.renderInfo()}
          </Row>
          <Row className="mt-4">
            <Col>
              <p>Porcentaje de valoracion: {`${this.props.percentageValue}`}</p>
              <Slider
                tooltip={false}
                value={this.props.percentageValue}
                labels={this.props.percentageLabels}
                onChange={this.props.onPercentageChange}
              />
            </Col>
          </Row>
          <Row className="mt-4">
            <Col>
              <p>
                Porcentaje de revancha: {`${this.props.percentageRevancha}`}
              </p>
              <Slider
                tooltip={false}
                value={this.props.percentageRevancha}
                labels={this.props.percentageLabels}
                onChange={this.props.onPercentageRevanchaChange}
              />
            </Col>
          </Row>
        </CardBody>
      );
    } else {
      return (
        <div className="empty-content">
          <Col>
            <p className="ml-1 mr-1">
              No existen preguntas en este servicio o no ha seleccionado un
              servicio valido, Por favor seleccione un servicio.
            </p>
          </Col>
        </div>
      );
    }
  }

  renderInfo() {
    return (
      <Col xs="12" sm="12" lg="5">
        <Row className="pt-3 pb-3 pl-3 pr-3">
          <Col xs="12" sm="6" lg="4" className="my-auto">
            Cantidad de Preguntas a mostrar
          </Col>
          <Col xs="12" sm="6" lg="8">
            <h1>
              <Badge color="secondary">
                <input
                  type="number"
                  className="special-input"
                  value={this.props.questionsCount}
                  name="questionsCount"
                  onChange={this.props.onGeneralChange}
                />
              </Badge>
            </h1>
          </Col>
        </Row>
        <Row className="pt-3 pb-3 pl-3 pr-3">
          <Col xs="12" sm="6" lg="4" className="my-auto">
            Tiempo de bloqueo
          </Col>
          <Col xs="12" sm="6" lg="8" className="d-flex">
            <h1>
              <Badge color="secondary">
                <input
                  type="number"
                  className="special-input"
                  value={this.props.lockTime}
                  name="lockTime"
                  onChange={this.props.onGeneralChange}
                />
              </Badge>
            </h1>
            <span className="ml-3 my-auto">En horas </span>
          </Col>
        </Row>
        <Row className="pt-3 pb-3 pl-3 pr-3">
          <Col xs="12" sm="6" lg="4" className="my-auto">
            Cantidad de intentos
          </Col>
          <Col xs="12" sm="6" lg="8">
            <h1>
              <Badge color="secondary">
                <input
                  type="number"
                  className="special-input"
                  value={this.props.attemptsCount}
                  name="attemptsCount"
                  onChange={this.props.onGeneralChange}
                />
              </Badge>
            </h1>
          </Col>
        </Row>
      </Col>
    );
  }

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
                        name="selectedService"
                        onChange={this.props.onServiceSelect}
                        id="servicio"
                        bsSize="sm"
                      >
                        <option value="0" selected={true} disabled={true}>
                          Service
                        </option>
                        {this.renderServices()}
                      </Input>
                    </Col>
                  </Row>
                </div>
              </CardHeader>
              {this.props.isQuestionsLoading
                ? this.renderLoading()
                : this.renderContent()}
              {this.props.message ? (
                <UncontrolledAlert color="info">
                  {this.props.message}
                </UncontrolledAlert>
              ) : null}
              {this.props.selectedService &&
              !this.props.isQuestionsLoading &&
              !isObjectEmpty(this.props.questions) ? (
                <CardFooter className="text-right">
                  <Button
                    className="btn-square mr-1"
                    disabled={this.props.isProcessing}
                    color="primary"
                    onClick={this.props.onSubmit}
                  >
                    {this.props.isProcessing ? (
                      <MDSpinner
                        size={15}
                        singleColor="#fff"
                        className="mr-1"
                      />
                    ) : null}
                    Save
                  </Button>
                  <Button
                    className="btn-square"
                    color="danger"
                    disabled={this.props.isProcessing}
                    onClick={this.props.onCancel}
                  >
                    Cancel
                  </Button>
                </CardFooter>
              ) : null}
            </Card>
          </Col>
        </Row>
      </DefaultLayout>
    );
  }
}

export default AdminSettings;
