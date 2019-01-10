import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";

import { LinkContainer } from 'react-router-bootstrap';
 
const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/secret"><NavItem>Cart</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/pets"><NavItem>Pets</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/electronics"><NavItem>Electronics</NavItem></LinkContainer>
        </Nav>
        <Nav pullRight>
          <LinkContainer to="/autos"><NavItem>Auto Parts</NavItem></LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
 
TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};
 
export default TopNavbar;
