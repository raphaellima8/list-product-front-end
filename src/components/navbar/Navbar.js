import React, { Component } from 'react';
import './Navbar.scss';
import Search from '../inputs/search/Search'
import Logo from '../logo/Logo';

class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <div className="nav__logo">
          <Logo />
        </div>
        <div className="nav__search">
          <Search />
        </div>
      </div>
    );
  }
}

export default Navbar;
