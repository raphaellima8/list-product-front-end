import React, { Component } from 'react';
import './ProductItem.scss';
import Gallery from './gallery/Gallery';
import Description from './description/Description';

export default class ProductItem extends Component {
  render() {
    return (
      <section className="product-container">
        <Gallery />
        <Description />
      </section>

    );
  }
}
