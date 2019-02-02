import React, { Component } from 'react';
import './SectionHeader.scss';

export default class SectionHeader extends Component {
 
  static defaultProps = {
    text: 'Lista de produtos'
  };

  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    }
  }
  render() {
    return (
      <div className="section-header-container">
        <h2>{ this.state.text }</h2>
      </div>
    );
  }
}
