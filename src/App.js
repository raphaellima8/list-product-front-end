import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/navbar/Navbar';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}
