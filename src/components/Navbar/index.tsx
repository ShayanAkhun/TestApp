import * as React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import './navbarStyles.css'

function Navbar() {
  return (
    <div className="Navbar-container">
      <Logo />
      <NavLinks />
    </div>
  );
}

export default Navbar;
