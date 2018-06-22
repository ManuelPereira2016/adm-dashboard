import React, { Component } from "react";
import PropTypes from "prop-types";
import UserRecovery from "../../views/Pages/UserRecovery/UserRecovery";
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import { getIsAuthedFlag, getIsAdminFlag } from '../../redux/modules/selectors/authentication';
import { getLoginToken } from "../../utils/utils";
import { sendRecovery } from "../../api/auth";
import to from "await-to-js";

class UserRecoveryContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired
  };

  state = {
      isProcessing: false,
      message: ""
  }

  constructor(props) {
      super(props);

      const authToken = getLoginToken();

      if (authToken) {
          if (props.isAuthed && !props.isAdmin) {
              props.dispatch(push('/user/form'));
          }
          else {
              props.dispatch(push('/admin/dashboard'));
          }
      }
  }

  onRecover = async (form) => {
      let message = "";

      this.setState({
          isProcessing: true,
          message
      });

      const email = form.email.value;

      const [err, data] = await to(sendRecovery(email));

      if (err) message = "Ocurrio un error con el servidor.";

      if (data) {
          message = data.data;
      }

      this.setState({
          isProcessing: false,
          message
      });
  };

  render() {
    return (
        <UserRecovery
            onRecover={this.onRecover}
            message={this.state.message}
            isProcessing={this.state.isProcessing} />
    );
  }
}

function mapStateToProps(state) {
    return {
        isAuthed: getIsAuthedFlag(state),
        isAdmin: getIsAdminFlag(state)
    }
}

export default connect(mapStateToProps)(UserRecoveryContainer);
