import React, { Component } from 'react';
import './Logo.scss';

export default class Logo extends Component {

  state = {
    title: 'mmartan'
  }

  render() {
    return (
      <div className="logo-container">
        <h1 className="title">{ this.state.title }</h1>
      </div>
    );
  }
}
