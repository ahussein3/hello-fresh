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
    exact: true,
    component: () => getAsyncComponent(() => import('./pages/View'))
  },
  {
    path: '/recipes/:recipeId/edit',
    exact: true,
    component: () => getAsyncComponent(() => import('./pages/Edit'))
  },
  {
    path: '/create',
    exact: true,
    component: () => getAsyncComponent(() => import('./pages/Create'))
  }
];

export default routes;
