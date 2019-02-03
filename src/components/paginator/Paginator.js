import React, { Component } from 'react';
import './Paginator.scss';

export default class Paginator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disableLeftIcons: 'disabled',
      disableRightIcons: '',
      pages: props.numberOfPages
    };
  }

  handleIconsVisibility = (e) => {
    console.log(e.currentTarget.dataset.id);
    this.setState({ disabledLeftIcons: '' })
  }

  createNavigationPages() {
    const list = [];
    for(let i = 1; i <= this.state.pages; i++) {
      list.push(<li key={i}><button data-id={i} onClick={this.handleIconsVisibility}>{i}</button></li>);
    }
    return list;
  }

  render() {
    return (
      <div className="paginator">
        <div className={`paginator__left-icons ${this.state.disableLeftIcons}`}>
          <i onClick={(e) => console.log(e.target)} className="fa fa-angle-double-left"></i>
          <i className="fa fa-angle-left"></i>
        </div>
        <ul>
          {this.createNavigationPages()}
        </ul>
        <div className={`paginator__right-icons ${this.state.disableRightIcons}`}>
          <i onClick={(e) => console.log(e.target)} className="fa fa-angle-right"></i>
          <i className="fa fa-angle-double-right"></i>
        </div>
      </div>
    );
  }
}