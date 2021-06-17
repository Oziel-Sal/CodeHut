//import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import "../style/Navbar.css"

const Example = (props) => {
  return (
    <div>
      <Navbar className="navbar">
        <NavbarBrand href="/" className="name">Code Hut</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Example;