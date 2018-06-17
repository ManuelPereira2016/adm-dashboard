import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from "@coreui/react";
import { push } from 'connected-react-router';
import { connect } from "react-redux";
import DefaultAside from "./DefaultAside";
import DefaultFooter from "./DefaultFooter";
import DefaultHeader from "./DefaultHeader";
import navigation from "../../_nav";
import { routes, adminRoutes } from "../../routes";
import { removeLoginToken } from "../../utils/utils";

class DefaultLayout extends Component {
    onLogout = () => {
        removeLoginToken();

        this.props.dispatch(push('/login'));
    }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader onLogout={this.onLogout} />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={navigation} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={[...routes, ...adminRoutes]} />
            <Container fluid>{this.props.children || null}</Container>
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}

export default connect()(DefaultLayout);
