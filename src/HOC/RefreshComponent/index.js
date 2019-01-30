import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export function RefreshComponent(WrappedComponent, exceptions = []) {
  class Refresh extends Component {
    static propTypes = {
      refresh: PropTypes.func.isRequired,
      nextLocation: PropTypes.string.isRequired
    };

    componentWillUnmount() {
      this.props.refresh();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return connect((state, router) => {
    return { nextLocation: router.location.pathname };
  })(Refresh);
}
