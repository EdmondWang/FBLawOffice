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
    return (
      <li className='ts-title' onClick={this.props.onTabTitleClick}>{this.props.title}</li>
    );
  },

});

module.exports = TabStripItem;
