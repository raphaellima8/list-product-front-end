import React, { Component } from 'react';
import ProductItem from './product-item/ProductItem';

export default class ProductList extends Component {

  state = {
    productList: []
  }

  componentWillReceiveProps({ productList }) {
    this.setState({ productList })
  }

  parseList() {
    return this.state.productList.map(product => {
      return <ProductItem key={product.productId} productItem={product} />;
    });
  }

  render() {
    return (
      <div>
        {this.parseList()}
      </div>
    );
  }
}
