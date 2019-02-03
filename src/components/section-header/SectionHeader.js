import React, { Component } from 'react';
import './SectionHeader.scss';

export default class SectionHeader extends Component {
 
  state = {
    defaultText: 'Lista de produtos',
    title: ''
  }

  componentWillReceiveProps(props) {
    const { newText } = this.props;
    if (props.newText !== newText) {
      this.setState({ title: props.newText})
    }
  }

  renderText() {
    const { defaultText, title } = this.state;
    return title === '' ? defaultText : title;
  }

  render() {
    return (
      <div className="section-header-container">
        <h2>{ this.renderText() }</h2>
      </div>
    );
  }
}
