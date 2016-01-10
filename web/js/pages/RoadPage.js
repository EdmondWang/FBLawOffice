var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');
var MidHeader = require('../components/MidHeader.js');

var RoadPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <MidHeader headerI18nKey={'MENU_OurRoad'} />
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = RoadPage;
