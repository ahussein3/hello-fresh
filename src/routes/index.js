import React from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';

import routes from './routes';

// import base layout container
import App from '../containers/App';

const Routes = () => (
  <BrowserRouter>
    <App>
      <Switch>
        {routes.map((route, i) => {
          const { component: Component, ...rest } = route;

          return (
            <Route
              key={i}
              {...rest}
              render={props => <Component {...props} />}
            />
          );
        })}
        <Redirect to="/" />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
