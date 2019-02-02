import React, { Component } from 'react';
import './SearchResult.scss';
import ProductItem from '../product-item/ProductItem';

export default class SearchResult extends Component {

  state = {
    amount: 200,
    text: 'produtos encontrados'
  };
  
  render() {
    return (
      <div className="search-result-container">
        <div className="search-result__amount-items">
          <p>{this.state.amount} {this.state.text.toUpperCase()}</p>
        </div>
        <div className="search-result__product-list">
          <ProductItem />
          <ProductItem />
        </div>
        <hr />
        <footer>
          <div className="search-result__items-per-page">
            <select>
              <option value="2">2 produtos por página</option>
              <option value="4">4 produtos por página</option>
              <option value="6">6 produtos por página</option>
              <option value="8">8 produtos por página</option>
            </select>
          </div>
          <div className="search-result__paginator">
            <div className="paginator__left-icons">
              <i className="fa fa-angle-double-left"></i>
              <i className="fa fa-angle-left"></i>
            </div>
            <ul className="search-result__pages">
              <li className="search-result__page-item">1</li>
              <li className="search-result__page-item">2</li>
              <li className="search-result__page-item">3</li>
              <li className="search-result__page-item">4</li>
              <li className="search-result__page-item">5</li>
            </ul>
            <div className="paginator__right-icons">
              <i className="fa fa-angle-right"></i>
              <i className="fa fa-angle-double-right"></i>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
