import React, { Component } from 'react';
import './Description.scss';

export default class Description extends Component {
  render() {
    return (
      <div className="product__description-container">
        <div className="product__description">
          <h3>Kit de cama 210 fios</h3>
          <p>Classic I - Solteiro Extra</p>
        </div>
        <div className="product__price">
          <p>R$98,00 por R$298,00</p>
        </div>
      </div>
    );
  }
}
