import React, { Component } from 'react';
import SectionHeader from '../section-header/SectionHeader';
import SearchResult from '../search-result/SearchResult';
import Footer from '../footer/Footer';

export default class Main extends Component {

  render() {
    return (
      <main>
        <SectionHeader
          newText={this.props.searchTerm}
        />
        <SearchResult
          amountItems={this.props.amountItems}
          data={this.props.searchResult}
        />
        <Footer
          searchByPageFn={this.props.searchByPage}
          numberOfPages={this.props.pages}
          itemsPerPage={this.props.updateItemsPerPage}
        />
      </main>
    );
  }
}