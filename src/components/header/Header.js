import React from 'react';
import './Header.scss';
import Search from '../inputs/search/Search';
import Logo from '../logo/Logo';

const Header = () => (
  <header>
    <Logo />
    <Search />
  </header>
);

export default Header;
