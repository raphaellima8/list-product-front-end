import React, { Component } from 'react';
import './Paginator.scss';

export default class Paginator extends Component {

  state = {
    disabled: 'disabled',
    numberOfPages: 1,
    currentPage: 1,
    itemsToShow: 5,
  };
    
  componentWillReceiveProps({ numberOfPages }) {
    const currentPage = numberOfPages !== this.state.numberOfPages ? 1 : this.state.currentPage;
    this.setState({ numberOfPages, currentPage });
  }

  searchByPage = (pageNumber) => {
    this.setState({ currentPage: Number(pageNumber) });
    this.props.searchByPageFn(pageNumber);
  }

  onPageClick = (e) => {
    this.searchByPage(e.currentTarget.dataset.id);
  }

  createNavigationPages() {
    const { numberOfPages, itemsToShow } = this.state;
    const pages = numberOfPages > itemsToShow ? itemsToShow : numberOfPages;
    const list = [];
    for(let i = 1; i <= pages; i++) {
      list.push(this.getButton(i));
    }
    return list;
  }

  getButton(id) {
    const { currentPage, disabled } = this.state;
    return (
      <button
        className={`${currentPage === id ? disabled : ''}`}
        key={id}
        data-id={id}
        onClick={this.onPageClick}
      >
          {id}
      </button>
    );
  }

  render() {
    const { currentPage, disabled, numberOfPages } = this.state;

    return (
      <div className="paginator">
        <div className={`paginator__left-icons ${currentPage > 1 ? '' : disabled }`}>
          <i onClick={(e) => this.searchByPage(1)} className="fa fa-angle-double-left"></i>
          <i onClick={(e) => this.searchByPage(currentPage - 1)} className="fa fa-angle-left"></i>
        </div>
        <ul>
          {this.createNavigationPages()}
        </ul>
        <div
          className={`paginator__right-icons ${currentPage === numberOfPages ? disabled : ''}`}
        >
          <i onClick={(e) => this.searchByPage(currentPage + 1)} className="fa fa-angle-right"></i>
          <i onClick={(e) => this.searchByPage(numberOfPages)} className="fa fa-angle-double-right"></i>
        </div>
      </div>
    );
  }
}