import React, { Component } from 'react';
import './Description.scss';

export default class Description extends Component {

 
  render() {
    return (
      <div className="product__description-container">
        <div className="product__description">
          <h3>{this.props.name}</h3>
          <p>{this.props.category} {this.props.type}</p>
        </div>
        <div className="product__price">
          <p>{Number(this.props.promotionalPrice).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })} por {Number(this.props.price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })}</p>
        </div>
      </div>
    );
  }
}
