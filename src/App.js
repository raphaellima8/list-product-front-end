import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header';
import SectionHeader from './components/section-header/SectionHeader';
import SearchResult from './components/search-result/SearchResult';
// import Header from './components/search-result/header/Header';
// import Container from './components/search-result/container/Container';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SectionHeader />
          <SearchResult />
        </main>
        {/* <Header text="Resultado da busca" />
        <Container /> */}
      </div>
    );
  }
}
