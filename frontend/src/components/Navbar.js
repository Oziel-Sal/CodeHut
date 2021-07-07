import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse
} from 'reactstrap';
import "../style/Navbar.css"
import { Link } from "react-router-dom";
import { GiElephantHead } from "react-icons/gi";

//GiElephantHead


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" expand="md">
        <NavbarBrand href="/" className="navbrand">Code Hut</NavbarBrand>
        <NavbarToggler onClick={toggle}>
          <GiElephantHead className="toggler-icon" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="nav" navbar>
            <NavItem>
              <NavLink
                tag={Link}
                to="/saved/"
                className="navlink"
              >
                Saved Content
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/ideas/"
                className="navlink"
                id="navlink"
              >
                App Ideas
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

