var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/ContentList.css');

var ContentList = React.createClass({

  /**
  *
  * data : [{header: '', text: ''}]
  */
  getInitialState : function() {
    return {
      data: [

      ]
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

  componentWillMount : function(){
    this.getSource();
  },

  handleClickRow : function(event){
    event.stopPropagation();
    event.preventDefault();
    var $target = $(event.target),
      rowData = null;
    if ($target.data('row')) {
      rowData = $target.data('row');
    } else {
      rowData = $target.parent().data('row');
    }

    if (this.props.handleClickRow && $.isFunction(this.props.handleClickRow)) {
      this.props.handleClickRow.call(this, rowData);
    }
  },

  render : function() {
    var that = this;
    var rows = this.state.data.map(function(row, index){
      return (
        <div key={index} className='cl-row' data-row={JSON.stringify(row)} onClick={that.handleClickRow}>
          <div className='cl-text'>{row.text}</div>
          <div className='cl-comment'>{row.comment}</div>
        </div>
      )
    });
    return (
      <div className='cl-container'>
        {rows}
      </div>
    );
  }
});

module.exports = ContentList;
