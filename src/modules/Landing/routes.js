import React from 'react';
import { AsyncComponent } from '../../components';

const getAsyncComponent = load => {
  return <AsyncComponent load={load} />;
};

const routes = [
  {
    path: '/',
    exact: true,
    component: () => getAsyncComponent(() => import('./index'))
  }
];

export default routes;
