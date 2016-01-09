var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');

var NewsPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <div>Hello News</div>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = NewsPage;
