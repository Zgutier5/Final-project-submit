import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>
        <Nav pullRight>
          <Link to="/secret"><Navbar.Text>Cart</Navbar.Text></Link>
        </Nav>
        <Nav pullRight>
          <Link to="/pets"><Navbar.Text>Pets</Navbar.Text></Link>
        </Nav>
        <Nav pullRight>
          <Link to="/electronics"><Navbar.Text>Electronics</Navbar.Text></Link>
        </Nav>
        <Nav pullRight>
          <Link to="/autos"><Navbar.Text>Auto Parts</Navbar.Text></Link>
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
