import React, { Component } from "react";
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import LogoIcon from "../web-images/house-icon.png";

class AppNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="danger" dark expand="md">
          <Container>
            <NavbarBrand href="/">
              <img src={LogoIcon} className="NavbarLogo mr-2" />
              Share-Lock-Homes
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="active">
                  <NavLink href="/">Search Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Log In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Sign Up</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
