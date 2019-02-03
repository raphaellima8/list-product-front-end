import React, { Component } from 'react';
import './Header.scss';
import Search from '../inputs/search/Search'
import Logo from '../logo/Logo';

class Header extends Component {
  render() {
    return (
      <header>
        <Logo />
        <Search searchFn={this.props.search}/>
      </header>
    );
  }
}

export default Header;
