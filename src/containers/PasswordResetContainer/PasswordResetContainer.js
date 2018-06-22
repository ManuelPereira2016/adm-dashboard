import React, { Component } from "react";
import PropTypes from "prop-types";
import PasswordReset from "../../views/Pages/PasswordReset/PasswordReset";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { changePassword } from "../../api/auth";
import to from "await-to-js";

class PasswordResetContainer extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };

  state = {
    isProcessing: false,
    message: ""
  };

  constructor(props) {
    super(props);

    this.formRef = React.createRef();

    this.token = this.props.location.pathname.split("/")[3];

    if (!this.token) {
      props.dispatch(push("/login"));
    }
  }

  onPasswordChange = async () => {
    let message = "",
        password = this.formRef.current.password.value,
        confirm = this.formRef.current.confirm.value;

    await this.setState({
      isProcessing: true,
      message
    });

    const isValidLength = word => word.length > 8;

    if (!isValidLength(password) || !isValidLength(confirm)) {
      message = "Por favor introduzca una contraseña mayor a 8 caracteres.";
    }

    if (!password || !confirm) {
      message = "Los campos son obligatorios.";
    }

    if (!message) {
      const [err, response] = await to(changePassword(this.token, { password, confirm }));

      if (err) message = "Ocurrio un error con el servidor.";

      if (response) {
          this.props.dispatch(push("/login"));

          return false;
      }
    }

    this.setState({
      isProcessing: false,
      message
    });
  };

  render() {
    return (
      <PasswordReset
        onSubmit={this.onPasswordChange}
        formRef={this.formRef}
        message={this.state.message}
        isProcessing={this.state.isProcessing}
      />
    );
  }
}

export default connect()(PasswordResetContainer);
