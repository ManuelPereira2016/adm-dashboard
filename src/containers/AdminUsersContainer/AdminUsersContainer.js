import React, { Component } from "react";
import PropTypes from "prop-types";
import AdminUsers from "../../views/Pages/AdminUsers/AdminUsers";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getUsers } from "../../api/user";

class AdminUsersContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
      isLoading: false,
      users: []
  }

  componentDidMount() {
      this.loadData();
  }

  async loadData() {
      this.setState({
          isLoading: true
      });

      try {
          const users = (await getUsers()).data;

          this.setState({
              users
          });
      }
      catch (err) {
          console.error(err);
      }
      finally {
          this.setState({
              isLoading: false
          });
      }
  }

  goToHighUserForm = () => {
    this.props.history.push("/register");
  };

  openModifyForm = (e, userData) => {
      e.preventDefault();
      e.stopPropagation();

      this.props.dispatch(push("/register", { userData, isEdit: true }));
  }

  render() {
      return (
          <AdminUsers
            users={this.state.users}
            openModifyForm={this.openModifyForm}
            isLoading={this.state.isLoading}
            goToHighUserForm={this.goToHighUserForm} />
      );
  }
}

export default connect()(AdminUsersContainer);
