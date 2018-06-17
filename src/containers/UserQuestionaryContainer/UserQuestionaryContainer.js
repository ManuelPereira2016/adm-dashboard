import React, { Component } from "react";
import PropTypes from "prop-types";
import UserQuestionary from "../../views/Pages/UserQuestionary/UserQuestionary";

class UserQuestionaryContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  render() {
    return <UserQuestionary />;
  }
}

export default UserQuestionaryContainer;
