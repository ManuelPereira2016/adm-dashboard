import React, { Component } from "react";
import PropTypes from "prop-types";
import UserForm from "../../views/Pages/UserForm/UserForm";

class UserFormContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    return <UserForm />;
  }
}

export default UserFormContainer;
