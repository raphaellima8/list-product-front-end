import React, { Component } from 'react';
import './Search.scss';

export default class Search extends Component {

  state = {
    searchTerm: ''
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchFn(this.state.searchTerm);
  }

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <div className="search-container">
        <form className="search__form" onSubmit={this.onFormSubmit}>
          <i className="fa fa-search"></i>
          <input
            type="search"
            value={this.state.searchTerm}
            onChange={this.onInputChange}
            placeholder="Buscar produto" />
        </form>
      </div>
    );
  }
}
