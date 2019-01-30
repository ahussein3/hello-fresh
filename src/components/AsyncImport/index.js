import React, { Component } from 'react';
import Loader from '../Loader';

class AsyncImport extends Component {
  state = {
    LoadedComponent: null
  };

  componentDidMount() {
    this.props.load().then(component => {
      this.setState(() => ({
        LoadedComponent: component.default ? component.default : component
      }));
    });
  }

  render() {
    const { LoadedComponent } = this.state;

    const otherProps = Object.assign({}, this.props);
    delete otherProps.load;

    return LoadedComponent ? <LoadedComponent {...otherProps} /> : <Loader />;
  }
}

export default AsyncImport;
