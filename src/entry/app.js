import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router';
import './cover.less';
import './global.less';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={require('../pages/home/app').default} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;