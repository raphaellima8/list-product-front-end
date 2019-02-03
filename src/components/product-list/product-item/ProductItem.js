import React, { Component } from 'react';
import './ProductItem.scss';
import Gallery from './gallery/Gallery';
import Description from './description/Description';

export default class ProductItem extends Component {
  
  render() {
    const { productItem } = this.props;
    const {
      category,
      name,
      price,
      promotionalPrice,
      type,
    } = productItem;
    return (
      <section className="product-container">
        <Gallery imageList={productItem.images}/>
        <Description
          category={category}
          name={name}
          price={price}
          promotionalPrice={promotionalPrice}
          type={type}
        />
      </section>

    );
  }
}
