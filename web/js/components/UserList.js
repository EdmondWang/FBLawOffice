var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/UserList.css');

var UserList = React.createClass({

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

    while(!$target.data('row')) {
      $target = $target.parent();
    }
    rowData = $target.data('row');

    if (this.props.handleClickRow && $.isFunction(this.props.handleClickRow)) {
      this.props.handleClickRow.call(this, rowData);
    }
  },

  render : function() {
    var that = this;
    var rows = this.state.data.map(function(row, index){
      return (
        <div key={row.id} className='ul-item' data-row={JSON.stringify(row)} onClick={that.handleClickRow}>
          <div className='ul-inner'>
            <div className='ul-name'>{row.name}</div>
            <div className='ul-field'>{row.field}</div>
          </div>
        </div>
      )
    });
    return (
      <div className='ul-container'>
        {rows}
      </div>
    );
  }
});

module.exports = UserList;
