import React from 'react';
import { Link } from 'react-router-dom';

const LinkedText = props => {
  const { children, ...rest } = props;
  return <Link {...rest}>{children}</Link>;
};

export default LinkedText;
