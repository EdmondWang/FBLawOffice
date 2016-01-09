var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');

var PublicationsPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <div>Hello Publications</div>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = PublicationsPage;
