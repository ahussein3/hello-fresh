import React, { Component } from 'react';
import AsyncImport from '../AsyncImport';

class AsyncComponent extends Component {
  render() {
    return <AsyncImport load={this.props.load} />;
  }
}

export default AsyncComponent;
