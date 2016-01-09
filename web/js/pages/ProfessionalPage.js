var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');

var ProfessionalPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <div>Hello Professional</div>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = ProfessionalPage;
