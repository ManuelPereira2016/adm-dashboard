import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logo from "../../assets/img/brand/Logo.png";
import sygnet from "../../assets/img/brand/Logo-small.png";

class MinimalHeader extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired
  };

  render() {
    return (
        <React.Fragment>
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: "TuID Logo" }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: "TuID Logo" }}
        />

        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <div className="my-dropdown">
                <i className="cui-options icons font-2xl d-block mt-3" />
              </div>
            </DropdownToggle>
            <DropdownMenu right style={{ right: "auto" }}>
              <DropdownItem header tag="div" className="text-center">
                <strong>Account</strong>
              </DropdownItem>
              <DropdownItem onClick={this.props.onLogout}>
                <i className="fa fa-lock" /> Logout
              </DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        </React.Fragment>
    );
  }
}

export default MinimalHeader;
