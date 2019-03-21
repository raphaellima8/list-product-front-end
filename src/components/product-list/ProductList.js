import React, { Component } from 'react';
import ProductItem from './product-item/ProductItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    products: state.productsPage.products
  }
}

class ProductList extends Component {

  parseList() {
    return this.props.products.map(product => {
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

export default connect(mapStateToProps)(ProductList);