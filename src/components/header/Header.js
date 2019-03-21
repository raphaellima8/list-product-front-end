import React, { Component } from 'react';
import './Header.scss';
import Search from '../inputs/search/Search'
import Logo from '../logo/Logo';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Search />
      </header>
    );
  }
}

export default Header;
