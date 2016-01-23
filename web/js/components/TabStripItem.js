var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var css = require('../../css/components/TabStripItem.css');

var TabStripItem = React.createClass({

  componentDidMount : function() {

  },

  renderTitle : function() {

  },

  render : function() {
    var classStr = 'ts-title';
    if (this.props.index == 0) {
      classStr += ' ts-title-noLeftPad';
    }
    if (this.props.isChildLevel == 'true') {
      classStr += ' ts-title-childLevel';
    }
    return (
      <li id={'ts-title' + this.props.index} className={classStr} onClick={this.props.onTabTitleClick}>{this.props.title}</li>
    );
  },

});

module.exports = TabStripItem;
