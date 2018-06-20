import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Container,
  Input,
  InputGroup,
  FormGroup,
  Label,
  Form,
  FormText,
  InputGroupAddon,
  UncontrolledAlert,
  InputGroupText,
  Row
} from "reactstrap";
import { AppHeader } from "@coreui/react";
import MinimalHeader from "../../../containers/DefaultLayout/MinimalHeader";
import { RadioGroup, Radio } from "react-radio-group";
import MDSpinner from "react-md-spinner";

class UserQuestionary extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    form: PropTypes.array.isRequired,
    message: PropTypes.string,
    isProcessing: PropTypes.bool.isRequired
  };

  renderQuestions() {
      const makeAnswer = (respuesta, id) => (
          <div>
            <Radio value={id} className="form-check-input" />
            <Label>{respuesta}</Label>
          </div>
      );

      const makeQuestion = (pregunta) => (
          <FormGroup key={`id_${pregunta.ID}`}>
            <Label>
              {pregunta.pregunta}
            </Label>
            <RadioGroup name={`pregunta_${pregunta.ID}`} className="pl-4" onChange={(value) => this.props.onChange(value, pregunta.ID)}>
                {makeAnswer(pregunta["0"], 0)}
                {makeAnswer(pregunta["1"], 1)}
                {makeAnswer(pregunta["2"], 2)}
                {makeAnswer(pregunta["3"], 3)}
            </RadioGroup>
          </FormGroup>
      );

      return this.props.form.map(field => makeQuestion(field));
  }

  render() {
    return (
        <div className="app ">
          <AppHeader >
            <MinimalHeader onLogout={this.props.onLogout} />
          </AppHeader>
          <div className="app-body flex-row align-items-center">
        <Container className="mt-5">
          <Row className="justify-content-center">
            <Col md="6">
              <Card>
                <div className="pb-3 pt-3 pl-3 pr-3 text-center">
                  <strong className="border-bottom pb-3 lead font-weight-bold">
                    Formulario de verificacion de identidad
                  </strong>
                </div>
                <CardBody>
                    {this.renderQuestions()}
                    {this.props.message ? (
                        <UncontrolledAlert color="info">
                        {this.props.message}
                        </UncontrolledAlert>
                    ) : null}
                </CardBody>
                <div className="pb-3 pr-3 pl-3 pt-3 text-center">
                  <Button onClick={this.props.onSubmit} disabled={this.props.isProcessing} color="primary" className="btn-square">
                    {this.props.isProcessing
                        ?
                        <span><MDSpinner size={15} singleColor="#fff" className="mr-1" />Realizando la validacion</span>
                        :
                        <span>Comprobar el formulario</span>
                    }
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        </div>
      </div>
    );
  }
}

export default UserQuestionary;
