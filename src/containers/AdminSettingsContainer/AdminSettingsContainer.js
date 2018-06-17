import React, { Component } from "react";
import PropTypes from "prop-types";
import AdminSettings from "../../views/Pages/AdminSettings/AdminSettings";

class AdminListsContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    return <AdminSettings />;
  }
}

export default AdminListsContainer;
