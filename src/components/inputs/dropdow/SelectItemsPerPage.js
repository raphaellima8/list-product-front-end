import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, setItemsPerPage } from '../../../actions';

import './SelectItemsPerPage.scss';

const mapStateToProps = (state) => {
  const { itemsPerPage } = state;
  return { itemsPerPage: itemsPerPage || 5, text: 'produtos por página' };
}

export class SelectItemsPerPage extends Component {

  constructor() {
    super();
    this.optionSelected = this.optionSelected.bind(this);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  componentDidUpdate() {
    const { setItemsPerPage, fetchProducts, itemsPerPage } = this.props;
    setItemsPerPage(itemsPerPage);
    fetchProducts();
  }

  optionSelected(event) {
    const { value } = event.target;
    this.props.setItemsPerPage(Number(value));
  }

  render() {
    const { text, itemsPerPage } = this.props;
    return (
      <select onChange={this.optionSelected} value={itemsPerPage}>
        <option value="5">5 {text}</option>
        <option value="10">10 {text}</option>
        <option value="15">15 {text}</option>
      </select>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    setItemsPerPage,
    fetchProducts
  }
)(SelectItemsPerPage);