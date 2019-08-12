import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContextItem from './ContextItem';
export default class index extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="context-menu">{this.props.options.map(ContextItem)}</div>
    );
  }
}
