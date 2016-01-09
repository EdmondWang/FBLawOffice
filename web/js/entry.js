var React = require('react');
var ReactDOM = require('react-dom');
var VerticalLayout = require('./components/VerticalLayout.js');
var VerticalLayoutItem = require('./components/VerticalLayoutItem.js');
var ScrollableNav = require('./components/ScrollableNav.js');
var MidHeader = require('./components/MidHeader.js');

ReactDOM.render(
  <VerticalLayout>
    <VerticalLayoutItem cssClass='midHeader'>
      <MidHeader headerI18nKey={'MENU_News&Deals'} />
    </VerticalLayoutItem>
    <VerticalLayoutItem>
      <ScrollableNav />
    </VerticalLayoutItem>
  </VerticalLayout>,
  document.getElementById('content')
);
