var React = require('react');
var ReactDOM = require('react-dom');
var VerticalLayout = require('./components/VerticalLayout.js');
var ScrollTab = require('./components/ScrollTab.js');
var MidHeader = require('./components/MidHeader.js');

ReactDOM.render(
  <VerticalLayout>
    <MidHeader headerI18nKey={'MENU_News&Deals'} />
    <ScrollTab />
  </VerticalLayout>,
  document.getElementById('content')
);
