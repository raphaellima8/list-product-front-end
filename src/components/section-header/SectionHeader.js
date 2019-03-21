import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SectionHeader.scss';

class SectionHeader extends Component {

  render() {
    return (
      <div className="section-header-container">
        <h2>{ this.props.title }</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.searchTerm || 'Lista de produtos'
  }
}

export default connect(mapStateToProps)(SectionHeader);