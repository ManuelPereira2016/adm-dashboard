import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRoute from "./containers/AdminRoute/AdminRoute";
import SplashScreen from "./views/Pages/SplashScreen/SplashScreen";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { isAuthed } from "./redux/modules/actionsCreators/authentication";
import { appLoadingSuccess } from "./redux/modules/actionsCreators/app";
import { getAppLoadingBool } from "./redux/modules/selectors/app";
import { getLoginToken, removeLoginToken } from "./utils/utils";
import { getAuthData } from "./api/auth";
import { getUsers } from "./api/user";
import { routes, adminRoutes } from "./routes";
import { withRouter } from "react-router-dom";
import "./scss/style.css";

class App extends Component {
  static propTypes = {
    isAppLoading: PropTypes.bool.isRequired
  };

  async componentWillMount() {
    const authToken = getLoginToken();

    try {
      if (authToken) {
        const data = await getAuthData();

        if (data.error === 1 && data.data.includes("Token")) {
            removeLoginToken();
        } else {
          await this.props.dispatch(isAuthed(data));
        }
      }
    } catch (err) {
        removeLoginToken();
    }
    finally {
        this.props.dispatch(appLoadingSuccess());
    }
  }

  render() {
    const { isAppLoading } = this.props;

    if (isAppLoading) {
      return <SplashScreen />;
    }

    return (
      <Switch>
        {adminRoutes.map((route, idx) => {
          return route.component ? (
            <AdminRoute
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              component={route.component}
            />
          ) : null;
        })}
        {routes.map((route, idx) => {
          return route.component ? (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={props => <route.component {...props} />}
            />
          ) : null;
        })}
      </Switch>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAppLoading: getAppLoadingBool(state)
  };
}

export default withRouter(connect(mapStateToProps)(App));
