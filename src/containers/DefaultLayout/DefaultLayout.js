import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import {
  AppAside,
  AppBreadcrumb,
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
import DefaultHeader from "./DefaultHeader";
import DefaultModal from "./DefaultModal";
import navigation from "../../_nav";
import { isModalOpen, getModal } from "../../redux/modules/selectors/modal";
import { routes, adminRoutes } from "../../routes";
import { removeLoginToken } from "../../utils/utils";

class DefaultLayout extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

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
            <DefaultModal modal={this.props.modal} isOpen={this.props.isOpen} />
          </main>
          <AppAside fixed hidden>
            <DefaultAside />
          </AppAside>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        isOpen: isModalOpen(state),
        modal: getModal(state)
    }
}

export default connect(mapStateToProps)(DefaultLayout);
