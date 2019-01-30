import React from 'react';
import { AsyncComponent } from '../../components';

const getAsyncComponent = load => {
  return <AsyncComponent load={load} />;
};

const routes = [
  {
    path: '/recipes',
    exact: true,
    component: () => getAsyncComponent(() => import('./pages/List'))
  },
  {
    path: '/recipes/:recipeId',
    exact: false,
    component: () => getAsyncComponent(() => import('./pages/View'))
  }
];

export default routes;
