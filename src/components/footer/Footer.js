import React, { Component } from 'react';
import './Footer.scss';
import SelectItemsPerPage from '../inputs/dropdow/SelectItemsPerPage';
import Paginator from '../paginator/Paginator';

export default class Footer extends Component {

  render() {
    return (
      <footer>
        <SelectItemsPerPage notifyItemsPerPageChange={this.props.itemsPerPage} />
        <Paginator numberOfPages={this.props.numberOfPages} /> 
      </footer>
    );
  }
}