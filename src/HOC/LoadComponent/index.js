import React, { Component } from 'react';
import PropTypes from 'prop-types';

export function LoadComponent(WrappedComponent) {
  return class Load extends Component {
    static propTypes = {
      load: PropTypes.func.isRequired,
      loaded: PropTypes.bool.isRequired,
      loadParam: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    };

    componentDidMount() {
      if (!this.props.loaded) {
        this.props.load(this.props.loadParam);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
