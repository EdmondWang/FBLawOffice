var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/VerticalLayout.css');

var VerticalLayout = React.createClass({
  render: function() {
    var items = null;
    if (!$.isArray(this.props.children)) {
      items = (<div>no vertical layout items</div>)
    } else {
      items = this.props.children.map(function(item, index){
        return (
          <div key={index} className='vl-item'>{item}</div>
        );
      });
    }
    return (
      <div className='vl-container'>
        {items}
      </div>
    );
  }
});

module.exports = VerticalLayout;
