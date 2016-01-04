var React = require('react');
var ReactDOM = require('react-dom');
var VerticalLayout = require('./components/VerticalLayout.js');
var ScrollableNav = require('./components/ScrollableNav.js');
var MidHeader = require('./components/MidHeader.js');

ReactDOM.render(
  <VerticalLayout>
    <MidHeader headerI18nKey={'MENU_News&Deals'} />
    <ScrollableNav />
  </VerticalLayout>,
  document.getElementById('content')
);
