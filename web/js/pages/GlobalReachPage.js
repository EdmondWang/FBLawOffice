var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');

var GlobalReachPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <div>Hello GlobalReach</div>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = GlobalReachPage;
