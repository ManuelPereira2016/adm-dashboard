import React, { Component } from "react";
import PropTypes from "prop-types";
import AdminUsers from "../../views/Pages/AdminUsers/AdminUsers";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { getUsers } from "../../api/user";
import { sendRecovery } from "../../api/auth";
import to from "await-to-js";

class AdminUsersContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  };

  state = {
      isLoading: false,
      isProcessing: false,
      selectedUser: null,
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

  sendEmailRecovery = async (e, user) => {
      e.preventDefault();
      e.stopPropagation();

      await this.setState({
          isProcessing: true,
          selectedUser: user.id_usuario
      });

      const [err, data] = await to(sendRecovery(user.email));

      if (err) console.error(err);

      this.setState({
         isProcessing: false,
         selectedUser: null
      });
  }

  render() {
      return (
          <AdminUsers
            users={this.state.users}
            isProcessing={this.state.isProcessing}
            openModifyForm={this.openModifyForm}
            sendEmailRecovery={this.sendEmailRecovery}
            selectedUser={this.state.selectedUser}
            isLoading={this.state.isLoading}
            goToHighUserForm={this.goToHighUserForm} />
      );
  }
}

export default connect()(AdminUsersContainer);
