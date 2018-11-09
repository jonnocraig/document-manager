import * as React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import logo from './kraken.png';

export interface INavbarProps {
  
}

const Nav = (props:INavbarProps) => (
  <Navbar color="dark" dark expand="md">
    <NavbarBrand href="/">
      <img src={logo} className="logo" />
      Kraken
    </NavbarBrand>    
  </Navbar>
);

export default Nav;

