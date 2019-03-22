import React from 'react';
import { connect } from 'react-redux';

import './SectionHeader.scss';

const SectionHeader = props => (
  <div className="section-header-container">
    <h2>{props.title}</h2>
  </div>
);

const mapStateToProps = state => {
  return {
    title: state.searchTerm || 'Lista de produtos'
  };
};

export default connect(mapStateToProps)(SectionHeader);
