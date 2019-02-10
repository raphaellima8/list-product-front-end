import React, { Component } from 'react';
import './Paginator.scss';

export default class Paginator extends Component {

  state = {
    disabled: 'disabled',
    numberOfPages: 1,
    currentPage: 1,
    maxItemsToShow: 5,
    firstItem: 1,
    lastItem: 5,
    left: 'L',
    right: 'R',
    firstPage: 1,
    lastPage: 1
  };
    
  componentWillReceiveProps({ numberOfPages }) {
    let state = {
      currentPage: this.state.currentPage,
      numberOfPages,
      lastPage: numberOfPages
    };
    if(numberOfPages !== this.state.numberOfPages) {
      state = {
        ...state,
        currentPage: 1,
        lastItem: numberOfPages < this.state.maxItemsToShow ? numberOfPages : 5,
        firstItem: 1
      }
    }
    this.setState(state);
  }

  navigateTo = (pageNumber, direction) => {
    this.setState({ currentPage: Number(pageNumber) });

    this.updateNavigator(Number(pageNumber), direction);    
    this.props.searchByPageFn(pageNumber);
  }

  getPreviousMultipleOfFive(num) {
    for(let i = 1; i <= num; i++){
      if(this.isMultipleOfFive(num - i)) {
        return i;
      }
    }
  }

   updateNavigator(pageNumber, direction) {
    const { currentPage, maxItemsToShow, numberOfPages, left, right } = this.state;
    let firstItem;
    let lastItem;

    if(!direction) {
      this.updateNavigatorToLastPage(pageNumber);
      return;
    }

    if (direction === right && this.isMultipleOfFive(currentPage)) {
      firstItem = pageNumber;
      const limit = (currentPage + maxItemsToShow) - 1;
      lastItem = limit > numberOfPages ? numberOfPages : limit;
      this.setState({ firstItem, lastItem });
    } else if(direction === left && this.isMultipleOfFive(pageNumber)) {
      firstItem = pageNumber - 4;
      lastItem = pageNumber;
      this.setState({ firstItem, lastItem });
    }
  }

  updateNavigatorToLastPage(pageNumber) {
    const { numberOfPages, lastPage, maxItemsToShow, firstPage } = this.state;
    
    if(pageNumber === firstPage) {
      const lastItem = numberOfPages < maxItemsToShow ? numberOfPages : maxItemsToShow;
      this.setState({ firstItem: 1, lastItem });
    }
    
    if(pageNumber === lastPage) {
      const subNumber = this.isMultipleOfFive(lastPage)
        ? maxItemsToShow
        : this.getPreviousMultipleOfFive(lastPage);
      const firstItem = (lastPage - subNumber) + 1;
      this.setState({ firstItem, lastItem: numberOfPages })
    }
  }

  isMultipleOfFive(num) {
    return Number(num) % 5 === 0;
  }

  onPageClick = (e) => {
    this.navigateTo(e.currentTarget.dataset.id, null);
  }

  createNavigationPages() {
    const { firstItem, lastItem } = this.state;
    const list = [];
    for(let i = firstItem; i <= lastItem; i++) {
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
    const { currentPage, disabled, lastPage, firstPage, left, right } = this.state;

    return (
      <div className="paginator">
        <div className={`paginator__left-icons ${currentPage > firstPage ? '' : disabled }`}>
          <i onClick={(e) => this.navigateTo(firstPage)} className="fa fa-angle-double-left m-hidden"></i>
          <i onClick={(e) => this.navigateTo(currentPage - 1, left)} className="fa fa-angle-left"></i>
        </div>
        <ul>
          {this.createNavigationPages()}
        </ul>
        <div
          className={`paginator__right-icons ${currentPage === lastPage ? disabled : ''}`}
        >
          <i onClick={(e) => this.navigateTo(currentPage + 1, right)} className="fa fa-angle-right"></i>
          <i onClick={(e) => this.navigateTo(lastPage)} className="fa fa-angle-double-right m-hidden"></i>
        </div>
      </div>
    );
  }
}