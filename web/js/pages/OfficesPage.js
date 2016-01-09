var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');

var OfficessPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <div>Hello Offices</div>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = OfficessPage;
