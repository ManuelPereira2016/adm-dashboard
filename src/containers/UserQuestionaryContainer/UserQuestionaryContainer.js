import React, { Component } from "react";
import PropTypes from "prop-types";
import UserQuestionary from "../../views/Pages/UserQuestionary/UserQuestionary";
import { removeLoginToken, getLoginToken } from "../../utils/utils";
import { validate, revenge } from "../../api/validation";
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import to from "await-to-js";

class UserQuestionaryContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  state = {
      message: '',
      hasSuccess: false,
      nextPage: false,
      idValidacion: 0,
      data: {},
      shouldSubmitRevenge: false,
      questions_answers: [],
      isProcessing: false
  }

  constructor(props){
      super(props);

      this.loginCheck(props);
  }

  componentDidMount() {
    if (this.props.location.state) {
      const form = this.props.location.state;

      const questions_answers = form.preguntaYRespuesta;
      const data = { ...form.formData };

      data["idconsulta"] = form.idconsulta;
      data["preguntasYrespuestas"] = [];

      questions_answers.forEach((field) => {
          data["preguntasYrespuestas"].push({ "pregunta": field.ID, "respuesta": null });
      });

      this.setState({
        questions_answers,
        data
      });
    }
    else {
        this.props.dispatch(push('/user/form'));
    }
  }

  onBack = () => {
    this.props.dispatch(push("/user/form"));
  }

  loginCheck(props) {
      const authToken = getLoginToken();

      if (!authToken) {
          props.dispatch(push('/login'));
      }
  }

  isValid(data) {
      return data.every(question => question["respuesta"] !== null);
  }

  onChange = (value, id) => {
      let index = this.state.data["preguntasYrespuestas"].findIndex(field => field.pregunta === id);

      this.state.data["preguntasYrespuestas"][index]["respuesta"] = value;
  }

  onLogout = () => {
    removeLoginToken();

    this.props.dispatch(push("/login"));
  };

  onSubmit = async () => {
      let message = '',
          hasSuccess = false,
          idValidacion = 0,
          nextPage = false;

      let err = null, data = null;

      await this.setState({
          isProcessing: true,
          message: ''
      });

      if (this.isValid(this.state.data["preguntasYrespuestas"])) {
          if (this.state.shouldSubmitRevenge) {
            [err, data] = await to(revenge(this.state.data));
          }
          else {
            [err, data] = await to(validate(this.state.data));
          }

          if (err) {
            message = "Algo raro ocurrio con el servidor.";
          }
          else {
            if (data.campos) {
              const { preguntaYRespuesta } = data.campos;

              let dataStore = [];

              preguntaYRespuesta.forEach((field) => {
                  dataStore.push({ "pregunta": field.ID, "respuesta": null });
              });

              await this.setState({
                shouldSubmitRevenge: true,
                questions_answers: preguntaYRespuesta,
                data: {
                  ...this.state.data,
                  preguntasYrespuestas: dataStore
                }
              });
            }
            else {
              nextPage = true;

              if (data.error) {
                message = `Desaprobado! ${data.data}`;
              }
              else {
                message = "Aprobado! Tome nota de su ID de consulta";
                idValidacion = parseInt(data.idconsulta, 10);

                hasSuccess = true;
              }
            }
          }
      }
      else {
          message = "Debe responder todas las preguntas.";
      }

      this.setState({
          hasSuccess,
          message,
          nextPage,
          idValidacion,
          isProcessing: false
      });
  }

  render() {
    return (
        <UserQuestionary
            isProcessing={this.state.isProcessing}
            message={this.state.message}
            hasSuccess={this.state.hasSuccess}
            form={this.state.questions_answers}
            onSubmit={this.onSubmit}
            onBack={this.onBack}
            idValidacion={this.state.idValidacion}
            onChange={this.onChange}
            nextPage={this.state.nextPage}
            onLogout={this.onLogout}/>
    );
  }
}

export default connect()(UserQuestionaryContainer);
