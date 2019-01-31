import React, { Component } from 'react';
import './Logo.scss';
import Title from '../title/Title';
export default class Logo extends Component {

  constructor() {
    super();
    this.state = {
      title: 'mmartan'
    }
  }

  render() {
    return (
      <div className="logo-container">
        <Title text={this.state.title} />
      </div>
    );
  }
}
