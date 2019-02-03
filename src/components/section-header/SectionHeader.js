import React, { Component } from 'react';
import './SectionHeader.scss';

export default class SectionHeader extends Component {
 
  state = {
    title: 'Lista de produtos'
  }

  componentWillReceiveProps(props) {
    const title = (!props.newText || props.newText === '') ? 'Lista de produtos' : props.newText;
    this.setState({ title });
  }

  render() {
    return (
      <div className="section-header-container">
        <h2>{ this.state.title }</h2>
      </div>
    );
  }
}
