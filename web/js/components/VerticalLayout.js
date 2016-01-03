var React = require('react');
var css = require('../../css/components/VerticalLayout.css');

var VerticalLayout = React.createClass({
  render: function() {
    var items = this.props.children.map(function(item, index){
      return (
        <div key={index} className='vl-item'>{item}</div>
      );
    });
    return (
      <div className='vl-container'>
        {items}
      </div>
    );
  }
});

module.exports = VerticalLayout;
