import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';








class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBContainer>
          <Router >
      <MDBNavbar light className="z-depth-0 light" expand="md">
        <MDBNavbarBrand>
          <strong className="light-green white-text accent-3 py-3 px-3">Mi Reality</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right className="w-100 d-flex justify-content-md-end">
            <MDBNavItem>
              <MDBNavLink to="#home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Specs</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="#Subscribe">Subscribe</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
      </MDBContainer>
    
    );
  }
}

export default NavbarPage;