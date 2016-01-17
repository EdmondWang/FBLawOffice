var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/ModalContainer.css');
var ModalDialog = require('./ModalDialog.js');

var ModalContainer = React.createClass({

  getInitialState : function() {
    return {
      data: [],
      isShowingModal : false
    }
  },

  getSource : function() {
    if (this.props.source) {
      if (typeof this.props.source == 'string') {
        $.ajax({
          url: this.props.source,
          success: $.proxy(function(data){
            if (data != null) {
              this.setState({
                data: data.list
              });
            }
          }, this),
          error: function(err) {
            console.log(err);
          }
        });
      }
    }
  },

  componentDidMount : function(){
    // this.getSource();
  },

  render : function() {
    var that = this,
      classStr = 'mc-container mc-overlay ';
    if (this.state.isShowingModal) {
      classStr += 'available'
    }
    return (
      <div className={classStr} ref='container'>
        <ModalDialog>
        </ModalDialog>
      </div>
    );
  }
});

module.exports = ModalContainer;
