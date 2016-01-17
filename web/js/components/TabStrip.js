var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/TabStrip.css');
var TabStripItem = require('../components/TabStripItem.js');


var TabStrip = React.createClass({

  componentDidMount : function() {
    var $content = $(this.refs.content),
      $firstContentItem = $('#ts-content-item0', $content);
    $firstContentItem.addClass('fadeIn');
  },

  componentWillUnmount : function() {

  },

  render : function() {
    var that = this,
      contents = [];
    this.curIndex = 0;
    var titles = React.Children.map(this.props.items, function(itemTitle, index) {
      var itemContent = that.props.contents[index],
        content = (<div
          id={'ts-content-item' + index}
          key={index}
          className='ts-content-item animated'>
          {itemContent}
        </div>);
      contents.push(content);
      return (<TabStripItem
        key={index}
        index={index}
        title={itemTitle}
        onTabTitleClick={that.handleClickOnTabTitle.bind(that, index)}>
      </TabStripItem>)
    });
    return (
      <div className='ts-container'>
        <ul className='ts-titleBar' ref='titleBar'>
          {titles}
        </ul>
        <div className='ts-content' ref='content'>
          {contents}
        </div>
      </div>
    );
  },

  handleClickOnTabTitle : function(index) {
    if (this.curIndex == index) {
      return;
    }
    var $displayItemContent = $('#ts-content-item' + index, this.refs.content),
      $currentItemContent = $('#ts-content-item' + this.curIndex, this.refs.content),
      that = this;
    $currentItemContent.removeClass('fadeIn').addClass('fadeOut');
    setTimeout(function(){
      $displayItemContent.removeClass('fadeOut').addClass('fadeIn');
      that.curIndex = index;
    }, 500);
  }
});

module.exports = TabStrip;
