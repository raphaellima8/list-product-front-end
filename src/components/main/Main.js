import React, { Component } from 'react';
import SectionHeader from '../section-header/SectionHeader';
import SearchResult from '../search-result/SearchResult';
import Footer from '../footer/Footer';

export default class Main extends Component {

  render() {
    return (
      <main>
        <SectionHeader />
        <SearchResult />
        <Footer />
      </main>
    );
  }
}