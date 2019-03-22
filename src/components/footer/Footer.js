import React from 'react';
import './Footer.scss';
import SelectItemsPerPage from '../inputs/dropdow/SelectItemsPerPage';
import Paginator from '../paginator/Paginator';

const Footer = () => (
  <footer>
    <SelectItemsPerPage />
    <Paginator />
  </footer>
);

export default Footer;
