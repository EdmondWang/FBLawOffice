var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/Modal.css');
var Paragraph = require('./Paragraph.js');

var ModalContainer = React.createClass({

  getInitialState : function() {
    return {
      source: '',
      isShowingModal : false
    }
  },

  getSource : function() {

  },

  render : function() {
    var that = this,
      classStr = 'm-container m-overlay ';
    if (this.state.isShowingModal) {
      classStr += 'available'
    }

    return (
      <div className={classStr} ref='container' source={this.state.source}>
        <div className='m-outer'>
          <div className='m-inner'>
            <div className='m-header'>
              <div className='m-title'>
              </div>
            </div>
            <div className='m-content'>
              <Paragraph source={this.state.source} />
            </div>
          </div>
          <a className='m-close'></a>
        </div>
      </div>
    );
  }

});

module.exports = ModalContainer;
