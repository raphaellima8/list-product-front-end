import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, searchTerm } from '../../../actions';

import './Search.scss';

class Search extends Component {

  onFormSubmit = event => {
    event.preventDefault();
    this.makeSearch();
  }

  onInputChange = event => {
    const { value } = event.target;
    this.props.searchTerm(value);
    if (value === '') {
      this.makeSearch();
    }
  }

  makeSearch() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="search-container">
        <form className="search__form" onSubmit={this.onFormSubmit}>
          <i className="fa fa-search"></i>
          <input
            type="search"
            value={this.props.term}
            onChange={this.onInputChange}
            placeholder="Buscar produto" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    term: state.searchTerm
  }
}

export default connect(mapStateToProps, {
  fetchProducts,
  searchTerm
})(Search);