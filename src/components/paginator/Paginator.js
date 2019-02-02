import React, { Component } from 'react';
import './Paginator.scss';

export default class Paginator extends Component {

  render() {
    return (
      <div className="paginator">
        <div className="paginator__left-icons">
          <i className="fa fa-angle-double-left"></i>
          <i className="fa fa-angle-left"></i>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div className="paginator__right-icons">
          <i className="fa fa-angle-right"></i>
          <i className="fa fa-angle-double-right"></i>
        </div>
      </div>
    );
  }
}