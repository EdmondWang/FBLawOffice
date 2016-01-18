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
var Modal = require('react-modal');

var RoadPage = React.createClass({

  getDefaultProps : function() {

  },

  getInitialState : function() {
    return { modalIsOpen: false };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleClickInterviewRow : function(rowData) {
    this.openModal();
  },

  render : function() {
    var that = this;
    const customModalStyles = {
      overlay : {
        backgroundColor : 'rgba(0,0,0,0.5)'
      },
      content : {

      }
    };
    return (
      <div className='page'>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customModalStyles}>
        </Modal>
        <VerticalLayout>
          <VerticalLayoutItem cssClass='midHeader'>
            <MidHeader headerI18nKey={'MENU_OurRoad'} />
          </VerticalLayoutItem>
          <VerticalLayoutItem>
            <ScrollableNav>
              <ScrollableNavItem name={intlData.messages.NAV_OverView}>
                <Section>
                  <SectionTitle text={intlData.messages.NAV_OverView} />
                  <SectionContent>
                    <Paragraph source={contextPath + 'road/overview'} />
                  </SectionContent>
                </Section>
              </ScrollableNavItem>
              <ScrollableNavItem name={intlData.messages.NAV_Vision}>
                <div>....sj2</div>
              </ScrollableNavItem>
              <ScrollableNavItem name={intlData.messages.NAV_History}>
                <TabStrip
                  items={[
                    intlData.messages.TEXT_Fangben_MileStone,
                    intlData.messages.TEXT_LawOfficeInterview,
                    intlData.messages.TEXT_CorporationInterview]}
                  contents={[
                    <TabStrip
                      items={['2016', '2015', '2014', '2013', '2012', '2011']}
                      contents={[
                        <ContentList source={contextPath + 'road/milestones/2016'} />,
                        <ContentList source={contextPath + 'road/milestones/2015'} />,
                        <ContentList source={contextPath + 'road/milestones/2014'} />
                      ]}>
                    </TabStrip>,
                    <ContentList source={contextPath + 'road/lawOffice-interview'} handleClickRow={that.handleClickInterviewRow} />
                  ]}>
                </TabStrip>
              </ScrollableNavItem>
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

module.exports = RoadPage;
