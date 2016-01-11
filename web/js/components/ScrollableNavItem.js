var React = require('react');
var $ = require('jquery');

var ScrollableNavItem = React.createClass({

  render : function() {
    this.name = this.props.name;
    this.children = this.props.children;
    return;
  },

});

module.exports = ScrollableNavItem;
