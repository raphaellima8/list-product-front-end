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
        <a href="/">
          <Title text={this.state.title} />
        </a>
      </div>
    );
  }
}
