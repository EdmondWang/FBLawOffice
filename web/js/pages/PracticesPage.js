var React = require('react');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');
var MidHeader = require('../components/MidHeader.js');

var PracticesPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <MidHeader headerI18nKey={'MENU_OurPractices'} />
        </VerticalLayoutItem>
        <VerticalLayoutItem>
          <VerticalLayout>
            <VerticalLayoutItem>
              <div>
                <p>
                  Text
                </p>
              </div>
            </VerticalLayoutItem>
          </VerticalLayout>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = PracticesPage;
