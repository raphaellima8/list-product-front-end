import React, { Component } from 'react';
import './Thumbnail.scss';

export default class Thumbnail extends Component {
  render() {
    return (
      <img alt="img" src={this.props.imgAddress} />
    );
  }
}
