//import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem
} from 'reactstrap';
import "../style/Navbar.css"
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <div>
      <Navbar className="navbar">
        <Nav>
        <NavItem>
          <NavLink
            tag={Link}
            to="/ideas/"
            className="navlink2"
          >
            Something
          </NavLink>
        </NavItem>
        </Nav>
        <NavbarBrand href="/" className="name">Code Hut</NavbarBrand>
        <Nav className="nav">
          <NavItem>
            <NavLink
              tag={Link}
              to="/ideas/"
              className="navlink"
            >
              App Ideas
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;