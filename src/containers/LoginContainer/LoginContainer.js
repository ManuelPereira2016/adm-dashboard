import React, { Component } from "react";
import PropTypes from "prop-types";
import Login from "../../views/Pages/Login/Login";
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import { getAuthData } from '../../api/auth';
import { getErrorMessage, getIsAuthedFlag, getIsAuthenticatingFlag, getIsAdminFlag } from '../../redux/modules/selectors/authentication';
import { handleLogin, isAuthed } from '../../redux/modules/actionsCreators/authentication';

class LoginContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    isAuthed: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    isAdmin: PropTypes.bool.isRequired
  };

  async componentDidUpdate(prevProps) {
      if (!prevProps.isAuthed && this.props.isAuthed) {
          const data = await getAuthData();

          await this.props.dispatch(isAuthed(data));

          if (this.props.isAdmin) {
              this.props.dispatch(push('/admin/dashboard'));
          }
          else {
              this.props.dispatch(push('/user/form'));
          }
      }
  }

  onLogin = (data) => {
      if (Object.values(data).indexOf('') !== -1) {
          return false;
      }

      const { email, password } = data;

      this.props.dispatch(handleLogin(email, password));
  };

  render() {
    return (
        <Login
            onSubmit={this.onLogin}
            errorMessage={this.props.errorMessage}
            isProcessing={this.props.isAuthenticating} />
    );
  }
}

function mapStateToProps(state) {
    return {
        errorMessage: getErrorMessage(state),
        isAuthed: getIsAuthedFlag(state),
        isAuthenticating: getIsAuthenticatingFlag(state),
        isAdmin: getIsAdminFlag(state)
    }
}

export default connect(mapStateToProps)(LoginContainer);
