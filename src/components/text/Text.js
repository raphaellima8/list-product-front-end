import React, { Component } from 'react';
import './Text.scss';

export default class Text extends Component {

  render() {
    return <p className="text-component">{ this.props.text }</p>;
  }
}
