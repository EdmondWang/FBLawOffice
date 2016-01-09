var React = require('react');
var $ = require('jquery');
var VerticalLayoutItem = require('./VerticalLayoutItem.js');
var css = require('../../css/components/VerticalLayout.css');

var VerticalLayout = React.createClass({

  renderChildren: function () {
    return React.Children.map(this.props.children, function (child) {
      return child;
    });
  },

  render : function() {
    var items = null;
    if (!Array.isArray(this.props.children)) {
      items = (<VerticalLayoutItem>no vertical layout items</VerticalLayoutItem>)
    } else {
      items = this.renderChildren();
    }
    return (
      <div className='vl-container'>
        {items}
      </div>
    );
  }
});

module.exports = VerticalLayout;
