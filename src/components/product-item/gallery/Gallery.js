import React, { Component } from 'react';
import './Gallery.scss';
import Thumbnail from '../../thumbnail/Thumbnail';

export default class Gallery extends Component {
  render() {
    return (
      <div className="gallery-container">
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    );
  }
}
