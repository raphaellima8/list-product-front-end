import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <i className="fa fa-search"></i>
        <input type="search" name="search" placeholder="Buscar produto" />
      </div>
    );
  }
}
