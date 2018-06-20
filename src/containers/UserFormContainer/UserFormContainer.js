import React, { Component } from "react";
import PropTypes from "prop-types";
import UserForm from "../../views/Pages/UserForm/UserForm";
import { removeLoginToken } from "../../utils/utils";
import { connect } from "react-redux";
import { push } from 'connected-react-router';

class UserFormContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  onLogout = () => {
    removeLoginToken();

    this.props.dispatch(push("/login"));
  };

  render() {
    return <UserForm onLogout={this.onLogout} />;
  }
}

export default connect()(UserFormContainer);
