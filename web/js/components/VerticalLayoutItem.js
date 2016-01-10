var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/VerticalLayoutItem.css');

var VerticalLayoutItem = React.createClass({

  componentDidMount : function() {

  },

  render : function() {
    var classStr = 'vl-item ';
    if (this.props.cssClass) {
      classStr += this.props.cssClass;
    }
    return (
      <div className={classStr}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = VerticalLayoutItem;
