var React = require('react');
var intlData = require('../locales/lang-zh-CN.js');
var MidHeader = require('../components/MidHeader.js');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');
var ScrollableNav = require('../components/ScrollableNav.js');
var ScrollableNavItem = require('../components/ScrollableNavItem.js');
var Paragraph = require('../components/Paragraph.js');

var RoadPage = React.createClass({
  render : function() {
    return (
      <VerticalLayout>
        <VerticalLayoutItem cssClass='midHeader'>
          <MidHeader headerI18nKey={'MENU_OurRoad'} />
        </VerticalLayoutItem>
        <VerticalLayoutItem>
          <ScrollableNav>
            <ScrollableNavItem name={intlData.messages.NAV_OverView}>
              <Paragraph source={contextPath + 'home/overview'}/>
            </ScrollableNavItem>
            <ScrollableNavItem name={intlData.messages.NAV_Vision}>
              <div>....sj2</div>
            </ScrollableNavItem>
            <ScrollableNavItem name={intlData.messages.NAV_History}>
              <div>....sj3</div>
            </ScrollableNavItem>
            <ScrollableNavItem name={intlData.messages.NAV_Reputation}>
              <div>....sj4</div>
            </ScrollableNavItem>
            <ScrollableNavItem name={intlData.messages.NAV_SocialResponsibility}>
              <div>....sj5</div>
            </ScrollableNavItem>
          </ScrollableNav>
        </VerticalLayoutItem>
      </VerticalLayout>
    );
  }
});

module.exports = RoadPage;
