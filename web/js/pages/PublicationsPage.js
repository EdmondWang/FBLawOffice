var React = require('react');
var intlData = require('../locales/lang-zh-CN.js');
var css = require('../../css/pages/RoadPage.css');
var MidHeader = require('../components/MidHeader.js');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');
var ScrollableNav = require('../components/ScrollableNav.js');
var ScrollableNavItem = require('../components/ScrollableNavItem.js');
var Section = require('../components/Section.js');
var SectionTitle = require('../components/SectionTitle.js');
var SectionContent = require('../components/SectionContent.js');
var Paragraph = require('../components/Paragraph.js');
var TabStrip = require('../components/TabStrip.js');
var ContentList = require('../components/ContentList.js');

var PublicationsPage = React.createClass({

  getDefaultProps: function() {

  },
  render: function() {
    var that = this;
    return (
      <div className='page'>
        <VerticalLayout>
          <VerticalLayoutItem cssClass='midHeader'>
            <MidHeader headerI18nKey={'MENU_OurPublications'} />
          </VerticalLayoutItem>
          <VerticalLayoutItem>
            <ScrollableNav>
              <ScrollableNavItem name={intlData.messages.NAV_Reputation}>
                <TabStrip
                  items={['2016', '2015', '2014']} contents={
                  [<Paragraph source={contextPath + 'road/socialResponsibility'} />,
                  <Paragraph source={contextPath + 'road/overview'} />
                ]}>
                </TabStrip>
              </ScrollableNavItem>
              <ScrollableNavItem name={intlData.messages.NAV_SocialResponsibility}>
                <Section>
                  <SectionTitle text={intlData.messages.NAV_SocialResponsibility} />
                  <SectionContent>
                    <Paragraph source={contextPath + 'road/socialResponsibility'} />
                  </SectionContent>
                </Section>
              </ScrollableNavItem>
            </ScrollableNav>
          </VerticalLayoutItem>
        </VerticalLayout>
      </div>
    );
  }

});

module.exports = PublicationsPage;
