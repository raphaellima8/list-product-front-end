import React, { Component } from 'react';
import './SearchResult.scss';
import ProductList from '../product-list/ProductList';
import Text from '../text/Text';
import Line from '../line/Line';

export default class SearchResult extends Component {

  state = {
    text: '{amount} produtos encontrados'
  };
  
  render() {
    return (
      <div className="search-result-container">
        <div className="search-result__amount-items">
          <Text text={this.state.text.toUpperCase()} />
        </div>
        <ProductList />
        <Line />
      </div>
    );
  }
}
