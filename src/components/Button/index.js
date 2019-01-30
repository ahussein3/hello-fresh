import React from 'react';
import Button from 'react-bootstrap/Button';

const WrappedButton = props => {
  const { children, ...rest } = props;

  return <Button {...rest}>{children}</Button>;
};

export default WrappedButton;
