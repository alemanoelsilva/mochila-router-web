import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...componentProperties }) => (
  <Route
    {...componentProperties}
    render={(props) => <Component {...props} />}
  />
);

export default PrivateRoute;
