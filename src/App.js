import React, { Component } from 'react';

import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';
import fetchData from './services/api';

export default class App extends Component {

  state = {
    searchTerm: '',
    itemsPerPage: '',
    currentPage: 1,
    pages: '',
    products: [],
    amountDocs: 0,
  };

  updateItemsPerPage = (items) => {
    this.fetchData(items, 1, this.state.searchTerm);
  }
  
  search = (term) => {
    this.fetchData(this.state.itemsPerPage, null, term);
  }

  searchByPage = (pageNumber) => {
    this.fetchData(this.state.itemsPerPage, pageNumber, this.state.searchTerm);
  }
  
  async fetchData(limit, page, search) {
    const result = await fetchData('api/v1/products', { search, limit, page });
    const { pages, products, amountDocs } = result.data;
    this.setState({ pages, products, amountDocs, itemsPerPage: limit, searchTerm: search });
  }

  render() {
    return (
      <div className="App">
        <Header search={this.search}/>
        <Main
          searchResult={this.state.products}
          amountItems={this.state.amountDocs}
          searchTerm={this.state.searchTerm}
          updateItemsPerPage={this.updateItemsPerPage}
          pages={this.state.pages}
          searchByPage={this.searchByPage}
        />
      </div>
    );
  }
}
