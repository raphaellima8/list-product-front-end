import React, { Component } from 'react';
import ProductItem from './product-item/ProductItem';

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <ProductItem />
        <ProductItem />
      </div>
    );
  }
}
