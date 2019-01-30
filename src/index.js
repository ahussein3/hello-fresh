import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';
import Api from './utils/request';
import * as serviceWorker from './serviceWorker';

import './index.css';

Api.setRecipes();

const renderApp = Component => {
  const target = document.getElementById('root');
  if (!target) return;

  ReactDOM.render(
    <React.Suspense fallback={null}>
      <Provider store={store}>
        <Component />
      </Provider>
    </React.Suspense>,
    target
  );
};

renderApp(Routes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
