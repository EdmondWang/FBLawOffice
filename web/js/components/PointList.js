var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/PointList.css');

var PointList = React.createClass({

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

  handleClickPoint : function(event){
    event.stopPropagation();
    event.preventDefault();
    var $target = $(event.target),
      rowData = null;

    while(!$target.data('point')) {
      $target = $target.parent();
    }
    rowData = $target.data('point');

    if (this.props.handleClickPoint && $.isFunction(this.props.handleClickPoint)) {
      this.props.handleClickPoint.call(this, rowData);
    }
  },

  render : function() {
    var that = this;
    var points = this.state.data.map(function(point, index){
      return (
        <div key={point.id} className='pl-point' data-point={JSON.stringify(point)} onClick={that.handleClickPoint}>
          <div className='pl-text'>{point.title}</div>
        </div>
      )
    });
    return (
      <div className='pl-container'>
        {points}
      </div>
    );
  }
});

module.exports = PointList;
