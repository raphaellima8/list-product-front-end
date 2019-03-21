import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SearchResult.scss';
import ProductList from '../product-list/ProductList';
import Text from '../text/Text';
import Line from '../line/Line';

const mapStateToProps = (state) => {
  return { 
    amountDocs: state.productsPage.amountDocs,
    text: '{amount} produtos encontrados'
  };
}

class SearchResult extends Component {
  
  render() {
    const { text, amountDocs } = this.props;
    return (
      <div className="search-result-container">
        <div className="search-result__amount-items">
          <Text text={text.replace('{amount}', amountDocs).toUpperCase()} />
        </div>
        <ProductList />
        <Line />
      </div>
    );
  }
}

export default connect(mapStateToProps)(SearchResult);