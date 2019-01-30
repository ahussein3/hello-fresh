import React from 'react';
import Navbar from '../Navbar';
import ErrorBoundary from '../../components/ErrorBoundary';
import './index.scss';

const AppError = React.lazy(() =>
  import('../../components/AppError' /* webpackChunkName: "error-msg" */)
);

const App = props => {
  const { children } = props;

  return (
    <ErrorBoundary fallbackComponent={AppError}>
      <Navbar />
      <div>{children}</div>
    </ErrorBoundary>
  );
};

export default App;
