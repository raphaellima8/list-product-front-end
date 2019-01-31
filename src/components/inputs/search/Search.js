import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  render() {
    return (
      <div class="search-container">
        <i class="fa fa-search search-icon"></i>
        <input class="search-field" type="search" name="search" placeholder="Buscar produto" />
      </div>
    );
  }
}

export default Search;
