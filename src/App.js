import React, { Component } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';


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
    // this.setState({ itemsPerPage: items });
    this.fetchData(items);
  }
  
  search = (term) => {
    // this.setState({ searchTerm: term });
    this.fetchData(this.state.itemsPerPage, null, term);
  }

  searchByPage = (pageNumber) => {
    this.fetchData(this.state.itemsPerPage, pageNumber, this.state.searchTerm);
  }
  
  async fetchData(itemsPerPage, page, searchTerm) {
    const abc = await axios.get('http://localhost:5000/api/v1/products', {
      params: {
        search: searchTerm,
        limit: itemsPerPage || this.state.itemsPerPage,
        page: page || this.state.currentPage
      }
    });
    const { pages, products, amountDocs } = abc.data;
    this.setState({ pages, products, amountDocs, itemsPerPage, searchTerm });
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
