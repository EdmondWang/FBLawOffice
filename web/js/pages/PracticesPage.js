var React = require('react');
var css = require('../../css/pages/PracticesPage.css');
var VerticalLayout = require('../components/VerticalLayout.js');
var VerticalLayoutItem = require('../components/VerticalLayoutItem.js');
var MidHeader = require('../components/MidHeader.js');
var PointList = require('../components/PointList.js');
var Modal = require('../components/Modal.js');

var PointStore = {};

var PracticesPage = React.createClass({
  getInitialState: function() {
    return PointStore;;
  },
  openModal: function() {
    this.refs.modal.open();
  },
  closeModal: function() {
    this.refs.modal.close();
  },
  handleClickPracticePoint: function(rowData) {
    this.setState({
      'title': rowData.title,
      'description': rowData.description
    });
    this.openModal();
  },
  handleCancel: function() {
    this.closeModal();
  },
  render : function() {
    return (
      <div class='page'>
        <Modal
          ref='modal'
          confirm='OK'
          cancel='Cancel'
          onCancel={this.handleCancel}
          onConfirm={this.closeModal}
          title={this.state.title}>
            {this.state.description}
        </Modal>
        <VerticalLayout>
          <VerticalLayoutItem cssClass='midHeader'>
            <MidHeader headerI18nKey={'MENU_OurPractices'} />
          </VerticalLayoutItem>
          <VerticalLayoutItem>
            <VerticalLayout>
              <VerticalLayoutItem cssClass='practicesHeader'>
                <div>
                  <p>
                    Text
                  </p>
                </div>
              </VerticalLayoutItem>
              <VerticalLayoutItem>
                <PointList source={contextPath + 'practices/practicePoints'} handleClickPoint={this.handleClickPracticePoint}></PointList>
              </VerticalLayoutItem>
            </VerticalLayout>
          </VerticalLayoutItem>
        </VerticalLayout>
      </div>
    );
  }
});

module.exports = PracticesPage;
