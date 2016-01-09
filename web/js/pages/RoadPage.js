var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');

var RoadPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <div>Hello Road</div>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = RoadPage;
