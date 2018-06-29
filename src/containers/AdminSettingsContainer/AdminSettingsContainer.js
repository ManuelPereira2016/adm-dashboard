import React, { Component } from "react";
import PropTypes from "prop-types";
import to from "await-to-js";
import AdminSettings from "../../views/Pages/AdminSettings/AdminSettings";
import { getServices } from "../../api/service";
import { getConfig, saveConfig } from "../../api/user";

class AdminSettingsContainer extends Component {
  state = {
    isServicesLoading: true,
    isQuestionsLoading: false,
    isProcessing: false,
    selectedService: null,
    percentageValue: 0,
    percentageRevancha: 0,
    questionsCount: 0,
    lockTime: 0,
    attemptsCount: 0,
    message: "",
    services: [],
    questions: {}
  };

  constructor(props) {
    super(props);

    this.questionsRef = React.createRef();

    this.percentageLabels = {
      0: "Bajo",
      50: "Medio",
      100: "Alto"
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const [err, data] = await to(getServices());

    if (err) return console.error(err);

    if (!data.error) {
      this.setState({
        services: data.data,
        isServicesLoading: false
      });
    }
  }

  async loadQuestions() {
    this.setState({
      isQuestionsLoading: true,
      questions: {}
    });

    const [err, data] = await to(getConfig(this.state.selectedService));

    if (err) return console.error(err);

    if (!data.error) {
      let questions = {};

      if (data.pregunta.length) {
        data.pregunta.forEach(question => {
          questions = {
            ...questions,
            [question.id_pregunta]: {
              descripcion: question.desc_pregunta,
              activa: question.activa,
              revancha: question.revancha,
              aleatoria: question.aleatoria,
              ponderacion: question.ponderacion
            }
          };
        });
      }

      this.setState({
        questions: questions,
        percentageValue: data.servicio ? data.servicio.por_validacion : 0,
        percentageRevancha: data.servicio ? data.servicio.por_revancha : 0,
        questionsCount: data.servicio ? data.servicio.cant_preg : 0,
        attemptsCount: data.servicio ? data.servicio.cant_intentos : 0,
        lockTime: data.servicio ? data.servicio.t_desbloqueo : 0,
        isQuestionsLoading: false
      });
    }
  }

  getCurrentFlagsIn(field) {
    let count = 0;

    for (let q in this.state.questions) {
      this.state.questions[q][field] ? count++ : null;
    }

    return count;
  }

  onServiceSelect = async event => {
    await this.setState({
      selectedService: event.target.value
    });

    this.loadQuestions();
  };

  onChange = (event, id) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    const questions = {...this.state.questions};

    if (name === "revancha") {
      const revanchaCount = this.getCurrentFlagsIn("revancha");

      if (revanchaCount && value) {
        for (let q in questions) {
          questions[q]["revancha"] = false;
        }
      }
    }

    this.setState({
      questions: {
        ...questions,
        [id]: {
          ...questions[id],
          [name]: value
        }
      }
    });
  };

  onGeneralChange = event => {
    const target = event.target;
    const value = parseInt(target.value, 10);
    const name = target.name;

    if (value <= 0) {
      return false;
    }

    this.setState({
      [name]: value
    });
  };

  onRate = (value, id) => {
    const { questions } = this.state;

    this.setState({
      questions: {
        ...questions,
        [id]: {
          ...questions[id],
          ponderacion: value
        }
      }
    });
  };

  onPercentageChange = value => {
    this.setState({
      percentageValue: value
    });
  };

  onPercentageRevanchaChange = value => {
    this.setState({
      percentageRevancha: value
    });
  };

  onCancel = () => {
    this.setState({
      selectedService: null
    });
  };

  getCurrentActive() {
    let count = 0;

    for (let q in this.state.questions) {
      this.state.questions[q].activa ? count++ : null;
    }

    return count;
  }

  handleSubmit = async () => {
    let data = {
      id_servicio: this.state.selectedService,
      por_validacion: this.state.percentageValue,
      por_revancha: this.state.percentageRevancha,
      cant_preg: this.state.questionsCount,
      cant_intentos: this.state.attemptsCount,
      t_desbloqueo: this.state.lockTime,
      questions: this.state.questions
    };

    await this.setState({
      message: "",
      isProcessing: true
    });

    const activeCount = this.getCurrentActive();

    if (parseInt(this.state.questionsCount) > activeCount) {
      this.setState({
        message:
          "La cantidad de preguntas a mostrar es mayor al numero de preguntas activas!, active las preguntas necesarias.",
        isProcessing: false
      });

      return false;
    }

    const [err, response] = await to(saveConfig(data));

    if (err) return console.error(err);

    this.setState({
      message: response.data,
      isProcessing: false
    });
  };

  render() {
    return (
      <AdminSettings
        questions={this.state.questions}
        questionsRef={this.questionsRef}
        services={this.state.services}
        isServicesLoading={this.state.isServicesLoading}
        isQuestionsLoading={this.state.isQuestionsLoading}
        percentageLabels={this.percentageLabels}
        selectedService={this.state.selectedService}
        percentageValue={this.state.percentageValue}
        percentageRevancha={this.state.percentageRevancha}
        message={this.state.message}
        questionsCount={this.state.questionsCount}
        lockTime={this.state.lockTime}
        attemptsCount={this.state.attemptsCount}
        isProcessing={this.state.isProcessing}
        onPercentageChange={this.onPercentageChange}
        onPercentageRevanchaChange={this.onPercentageRevanchaChange}
        onServiceSelect={this.onServiceSelect}
        onRate={this.onRate}
        onChange={this.onChange}
        onGeneralChange={this.onGeneralChange}
        onCancel={this.onCancel}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default AdminSettingsContainer;
