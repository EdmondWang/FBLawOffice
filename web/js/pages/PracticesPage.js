var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');

var PracticesPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <div>Hello Practices</div>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = PracticesPage;
