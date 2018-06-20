import React, { Component } from "react";
import PropTypes from "prop-types";
import to from "await-to-js";
import AdminSettings from "../../views/Pages/AdminSettings/AdminSettings";
import { getServices } from "../../api/service";
import { getConfig } from "../../api/user";

class AdminListsContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
    isServicesLoading: true,
    isQuestionsLoading: false,
    selectedService: null,
    percentageValue: 0,
    percentageRevancha: 0,
    questionsCount: 0,
    lockTime: 0,
    attemptsCount: 0,
    services: [],
    questions: {}
  };

  componentWillMount() {
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

    const sample = [
      {
        id_pregunta: 1,
        desc_pregunta: "Soy una pregunta de prueba?",
        activa: true,
        aleatoria: false,
        revancha: false,
        ponderacion: 2
      },
      {
        id_pregunta: 2,
        desc_pregunta: "Soy una pregunta de prueba?",
        activa: true,
        aleatoria: false,
        revancha: false,
        ponderacion: 2
      },
      {
        id_pregunta: 3,
        desc_pregunta: "Soy una pregunta de prueba?",
        activa: true,
        aleatoria: false,
        revancha: false,
        ponderacion: 2
      }
    ];

    if (!data.error) {
      let questions = {};

      if (sample.length) {
        sample.forEach(question => {
          questions = {
            ...questions,
            [question.id_pregunta]: {
              descripcion: question.desc_pregunta,
              activa: question.activa,
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
    const { questions } = this.state;

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

  handleSubmit = () => {
      let data = {
          id_servicio: this.state.selectedService,
          por_validacion: this.state.percentageValue,
          por_revancha: this.state.percentageRevancha,
          questions: this.state.questions
      };

      console.log(data);
  };

  render() {
    return (
      <AdminSettings
        questions={this.state.questions}
        services={this.state.services}
        isServicesLoading={this.state.isServicesLoading}
        isQuestionsLoading={this.state.isQuestionsLoading}
        percentageLabels={this.percentageLabels}
        selectedService={this.state.selectedService}
        percentageValue={this.state.percentageValue}
        percentageRevancha={this.state.percentageRevancha}
        questionsCount={this.state.questionsCount}
        lockTime={this.state.lockTime}
        attemptsCount={this.state.attemptsCount}
        onPercentageChange={this.onPercentageChange}
        onPercentageRevanchaChange={this.onPercentageRevanchaChange}
        onServiceSelect={this.onServiceSelect}
        onRate={this.onRate}
        onChange={this.onChange}
        onCancel={this.onCancel}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

export default AdminListsContainer;
