import React, { Component } from "react";
import PropTypes from "prop-types";
import AdminLists from "../../views/Pages/AdminLists/AdminLists";

class AdminListsContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    return <AdminLists />;
  }
}

export default AdminListsContainer;
