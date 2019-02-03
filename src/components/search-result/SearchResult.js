import React, { Component } from 'react';
import './SearchResult.scss';
import ProductList from '../product-list/ProductList';
import Text from '../text/Text';
import Line from '../line/Line';

export default class SearchResult extends Component {

  state = {
    text: '{amount} produtos encontrados',
    data: []
  };

  componentWillReceiveProps({data}) {
    this.setState({ data })
  }
  
  render() {
    const { text, data} = this.state;
    return (
      <div className="search-result-container">
        <div className="search-result__amount-items">
          <Text text={text.replace('{amount}', data.length).toUpperCase()} />
        </div>
        <ProductList productList={data} />
        <Line />
      </div>
    );
  }
}
