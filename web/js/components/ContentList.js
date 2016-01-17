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

  render : function() {
    var rows = this.state.data.map(function(row, index){
      var result = [];
      result.push(<div className='cl-text'>{row.text}</div>);
      result.push(<div className='cl-comment'>{row.comment}</div>);
      return result;
    });
    return (
      <div className='cl-container'>
        {rows}
      </div>
    );
  }
});

module.exports = ContentList;
