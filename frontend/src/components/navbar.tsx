import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './kraken.png';
import './navbar.css';

const Nav = () => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">
      <img className="logo" src={logo} />
      <h1 className="logoHeading">Kraken</h1>
    </NavbarBrand>    
  </Navbar>
);

export default Nav;

