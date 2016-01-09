var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, browserHistory } from 'react-router';
var App = require('./App.js');
var HomePage = require('./pages/HomePage.js');
var RoadPage = require('./pages/RoadPage.js');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={HomePage} />
      <Route path='road' component={RoadPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
