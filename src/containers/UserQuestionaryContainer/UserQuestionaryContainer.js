import React, { Component } from "react";
import PropTypes from "prop-types";
import UserQuestionary from "../../views/Pages/UserQuestionary/UserQuestionary";
import { removeLoginToken, getLoginToken } from "../../utils/utils";
import { validate } from "../../api/validation";
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import to from "await-to-js";

class UserQuestionaryContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
      message: '',
      hasSuccess: false,
      nextPage: false,
      idValidacion: 0,
      isProcessing: false
  }

  constructor(props){
      super(props);

      this.loginCheck(props);

      this.questions_answers = [];
      this.data = {};

      if (this.props.location.state) {
        const form = this.props.location.state;

        this.questions_answers = form.preguntaYRespuesta;

        this.data = { ...form.formData };

        this.data["idconsulta"] = form.idconsulta;
        this.data["preguntasYrespuestas"] = [];

        this.questions_answers.forEach((field) => {
            this.data["preguntasYrespuestas"].push({ "pregunta": field.ID, "respuesta": null });
        });
      }
      else {
          props.dispatch(push('/user/form'));
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
      let index = this.data["preguntasYrespuestas"].findIndex(field => field.pregunta === id);

      this.data["preguntasYrespuestas"][index]["respuesta"] = value;
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

      await this.setState({
          isProcessing: true,
          message: ''
      });

      if (this.isValid(this.data["preguntasYrespuestas"])) {
          const [err, data] = await to(validate(this.data));

          if (err) {
            message = "Algo raro ocurrio con el servidor.";
          }
          else {
            nextPage = true;

            if (data.error) {
              message = `Desaprobado! ${data.data}`;
            }
            else {
              message = "Aprobado! Tome nota de su ID de consulta";
              idValidacion = data.idconsulta;

              hasSuccess = true;
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
            form={this.questions_answers}
            onSubmit={this.onSubmit}
            onBack={this.onBack}
            idValidacion={this.idValidacion}
            onChange={this.onChange}
            nextPage={this.state.nextPage}
            onLogout={this.onLogout}/>
    );
  }
}

export default connect()(UserQuestionaryContainer);
