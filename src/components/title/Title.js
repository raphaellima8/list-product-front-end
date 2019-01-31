import React, { Component } from 'react';

export default class Title extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: null
    }
  }

  componentDidMount() {
    this.setState({ title: this.props.text });
  }

  render() {
    const style = {
      margin: 0
    }
    return <h1 style={ style }>{ this.state.title }</h1>;
  }
}
