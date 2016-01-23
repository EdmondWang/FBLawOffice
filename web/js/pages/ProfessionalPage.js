var React = require('react');
var intlData = require('../locales/lang-zh-CN.js');
var MidHeader = require('../components/MidHeader.js');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');
var UserList = require('../components/UserList.js');
var UserProfile = require('../components/UserProfile.js');
var Modal = require('../components/Modal.js');

var ProfessionalPage = React.createClass({
  openModal: function() {
    this.refs.modal.open();
  },
  closeModal: function() {
    this.refs.modal.close();
  },
  handleCancel: function() {
    this.closeModal();
  },
  handleClickEmployeeRow : function(rowData) {
    this.refs.userProfile.setState(rowData);
    this.openModal();
  },
  render : function() {
    return (
      <div className='page'>
        <Modal
          ref='modal'
          confirm='OK'
          cancel='Cancel'
          onCancel={this.handleCancel}
          onConfirm={this.closeModal}
          title={intlData.messages.TEXT_Bingwen_LawerIntro}>
            <UserProfile ref='userProfile'></UserProfile>
        </Modal>
        <VerticalLayout>
          <VerticalLayoutItem cssClass='midHeader'>
            <MidHeader headerI18nKey={'MENU_OurProfessional'} />
          </VerticalLayoutItem>
          <VerticalLayoutItem>
            <UserList source={contextPath + 'professional/employees'} handleClickRow={this.handleClickEmployeeRow} />
          </VerticalLayoutItem>
        </VerticalLayout>
      </div>
    );
  }
});

module.exports = ProfessionalPage;
