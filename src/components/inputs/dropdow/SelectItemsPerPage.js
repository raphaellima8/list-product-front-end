import React, { Component } from 'react';
import './SelectItemsPerPage.scss';

export default class SelectItemsPerPage extends Component {

  state = {
    text: 'produtos por página',
    optionValue: 5
  }

  constructor() {
    super();
    this.optionSelected = this.optionSelected.bind(this);
  }

  componentDidMount() {
    this.props.notifyItemsPerPageChange(this.state.optionValue);
  }

  componentDidUpdate(prevProps, prevState) {
    const { optionValue } = prevState;
    if (optionValue !== this.state.optionValue) {
      this.props.notifyItemsPerPageChange(this.state.optionValue);
    }
  }

  optionSelected(event) {
    const { value } = event.target;
    this.setState({ optionValue: value });
  }

  render() {
    return (
      <select onChange={this.optionSelected} value={this.state.optionValue}>
        <option value="5">5 {this.state.text}</option>
        <option value="10">10 {this.state.text}</option>
        <option value="15">15 {this.state.text}</option>
      </select>
    );
  }
}
