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
    this.setState({ itemsPerPage: items });
    this.fetchData(items);
  }
  
  search = (term) => {
    this.setState({ searchTerm: term });
    this.fetchData(this.state.itemsPerPage, null, term);
  }
  
  async fetchData(items, page, term) {
    const abc = await axios.get('http://localhost:5000/api/v1/products', {
      params: {
        search: term,
        limit: items || this.state.itemsPerPage,
        page: page || this.state.currentPage
      }
    });
    const { pages, products } = abc.data;
    this.setState({ pages, products });
  }

  render() {
    return (
      <div className="App">
        <Header search={this.search}/>
        <Main
          searchResult={this.state.products}
          searchTerm={this.state.searchTerm}
          updateItemsPerPage={this.updateItemsPerPage}
        />
      </div>
    );
  }
}
