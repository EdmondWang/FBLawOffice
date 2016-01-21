require('./layout.js');
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, browserHistory } from 'react-router';
var App = require('./App.js');
var HomePage = require('./pages/HomePage.js');
var RoadPage = require('./pages/RoadPage.js');
var CareersPage = require('./pages/CareersPage.js');
var ContactPage = require('./pages/ContactPage.js');
var GlobalReachPage = require('./pages/GlobalReachPage.js');
var NewsPage = require('./pages/NewsPage.js');
var OfficesPage = require('./pages/OfficesPage.js');
var PublicationsPage = require('./pages/PublicationsPage.js');
var PracticesPage = require('./pages/PracticesPage.js');
var ProfessionalPage = require('./pages/ProfessionalPage.js');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='home' component={HomePage} />
      <Route path='road' component={RoadPage} />
      <Route path='careers' component={CareersPage} />
      <Route path='contactus' component={ContactPage} />
      <Route path='globalreach' component={GlobalReachPage} />
      <Route path='news' component={NewsPage} />
      <Route path='offices' component={OfficesPage} />
      <Route path='practices' component={PracticesPage} />
      <Route path='publications' component={PublicationsPage} />
      <Route path='professional' component={ProfessionalPage} />
    </Route>
  </Router>,
  document.getElementById('app')
);
