import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from './components/global/Main';
import HomeApp from './components/home/HomeApp';

//<IndexRoute component={ArtistMain} />
//<Route path="artists/new" component={ArtistCreate} />

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
      <IndexRoute component={HomeApp} />
      </Route>
    </Router>
  );
};

export default Routes;
