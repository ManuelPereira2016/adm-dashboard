import React, { Component } from "react";
import PropTypes from "prop-types";
import AdminUsers from "../../views/Pages/AdminUsers/AdminUsers";

class AdminUsersContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  goToHighUserForm = () => {
    this.props.history.push("/register");
  };

  render() {
    return <AdminUsers goToHighUserForm={this.goToHighUserForm} />;
  }
}

export default AdminUsersContainer;
