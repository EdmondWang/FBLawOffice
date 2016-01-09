var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');
var ScrollableNav = require('../components/ScrollableNav.js');
var MidHeader = require('../components/MidHeader.js');

var HomePage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <MidHeader headerI18nKey={'MENU_NewsAndDeals'} />
        </VerticalLayoutItem>
        <VerticalLayoutItem>
          <ScrollableNav />
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = HomePage;
