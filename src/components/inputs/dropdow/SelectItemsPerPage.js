import React, { Component } from 'react';
import './SelectItemsPerPage.scss';

export default class SelectItemsPerPage extends Component {

  render() {
    return (
      <select>
        <option value="2">2 produtos por página</option>
        <option value="4">4 produtos por página</option>
        <option value="6">6 produtos por página</option>
        <option value="8">8 produtos por página</option>
      </select>
    );
  }
}
