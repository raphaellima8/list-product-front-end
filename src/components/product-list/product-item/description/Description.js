import React, { Component } from 'react';
import './Description.scss';

export default class Description extends Component {
  setMoneyMask(value) {
    const parsedValue = Number(value);
    const v = !Number.isNaN(parsedValue) ? parsedValue : 0;
    return v.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  renderPromotionalPrice(value) {
    return (
      <p className="product__promotional-price">{this.setMoneyMask(value)}</p>
    );
  }

  render() {
    return (
      <div className="product__description-container">
        <div className="product__description">
          <h3>{this.props.name}</h3>
          <p>
            {this.props.category} {this.props.type}
          </p>
        </div>
        <div className="product__price-container">
          <p className="product__price">
            {this.setMoneyMask(this.props.price)}
          </p>
          <p>por</p>
          {this.renderPromotionalPrice(this.props.promotionalPrice)}
        </div>
      </div>
    );
  }
}
