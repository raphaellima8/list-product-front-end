import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header';
import Main from './components/main/Main';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}
