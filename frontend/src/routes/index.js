import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import SignUp from '~/pages/SignUp';
import Provider from '~/pages/Dashboard/Provider';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/providers" component={Provider} isPrivate />

      {/*   <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}