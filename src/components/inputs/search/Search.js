import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <i className="fa fa-search search-icon"></i>
        <input className="search-field" type="search" name="search" placeholder="Buscar produto" />
      </div>
    );
  }
}
