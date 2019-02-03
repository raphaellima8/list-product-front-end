import React, { Component } from 'react';
import './Gallery.scss';
import Thumbnail from '../../../thumbnail/Thumbnail';

export default class Gallery extends Component {

  parseItems() {
    return this.props.imageList.map(image => <Thumbnail key={image.id} imgAddress={image.src} />);
  }

  render() {
    return (
      <div className="gallery-container">
        {this.parseItems()}
      </div>
    );
  }
}
