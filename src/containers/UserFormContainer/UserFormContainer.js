import React, { Component } from "react";
import PropTypes from "prop-types";
import UserForm from "../../views/Pages/UserForm/UserForm";
import { removeLoginToken, getLoginToken } from "../../utils/utils";
import { setQuestions } from "../../api/question";
import { getServices } from "../../api/service";
import { getUserData } from "../../redux/modules/selectors/user";
import { getIsAdminFlag } from "../../redux/modules/selectors/authentication";
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import to from "await-to-js";

class UserFormContainer extends Component {
    static propTypes = {
        userData: PropTypes.object.isRequired
    }

  state = {
      message: '',
      isProcessing: false
  }

  constructor(props) {
      super(props);

      this.loginCheck(props);
  }

  loginCheck(props) {
      const authToken = getLoginToken();

      if (!authToken) {
          props.dispatch(push('/login'));
      }
      else {
          if (this.props.isAdmin) {
              props.dispatch(push('/admin/dashboard'));
          }
      }
  }

  onLogout = () => {
    removeLoginToken();

    this.props.dispatch(push("/login"));
  };

  onSubmit = async (form) => {
      let message = '';

      await this.setState({
          isProcessing: true,
          message: ''
      });

      if (form.sexo.value === "0" || !form.dni.value) {
          return false;
      }

      let formData = { documento: form.dni.value, sexo: form.sexo.value, servicio: this.props.userData.id_servicio };

      const [err, data] = await to(setQuestions(formData));

      if (err) message = "Ocurrio un error inesperado en el servidor.";

      if (data) {
          if (data.message) {
              message = data.message;
          }
          else {
              this.props.dispatch(push("/user/questionary", {...data.campos, formData, idconsulta: data.idconsulta}));

              return false;
          }
      }

      this.setState({
          isProcessing: false,
          message
      });
  }

  render() {
    return (
        <UserForm
            isProcessing={this.state.isProcessing}
            message={this.state.message}
            services={this.state.services}
            onSubmit={this.onSubmit}
            onLogout={this.onLogout}/>
    );
  }
}

function mapStateToProps(state) {
    return {
        userData: getUserData(state),
        isAdmin: getIsAdminFlag(state)
    };
}

export default connect(mapStateToProps)(UserFormContainer);
