var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/TabStrip.css');
var TabStripItem = require('../components/TabStripItem.js');


var TabStrip = React.createClass({

  componentDidMount : function() {
    this.selectTab(0);
  },

  componentWillUnmount : function() {

  },

  render : function() {
    var that = this,
      contents = [];
    this.curIndex = -1; // init
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
        isChildLevel={that.props.isChildLevel}
        title={itemTitle}
        onTabTitleClick={that.handleClickOnTabTitle.bind(that, index)}>
      </TabStripItem>)
    });
    return (
      <div className='ts-container' ref='container'>
        <ul className='ts-titleBar' ref='titleBar'>
          {titles}
        </ul>
        <div className='ts-content' ref='content'>
          {contents}
        </div>
      </div>
    );
  },

  selectTab :function(index) {
    if (this.curIndex == index) {
      return;
    }

    var $itemContents = $(this.refs.content).children(),
      $currentItemTitle = $('#ts-title' + this.curIndex, this.refs.container),
      $currentItemContent = null,
      $displayItemTitle = $('#ts-title' + index, this.refs.container),
      $displayItemContent = null,
      that = this;
    $.each($itemContents, function(k, itemContent){
      if (itemContent.id == 'ts-content-item' + that.curIndex) {
        $currentItemContent = $(itemContent);
      }
      if (itemContent.id == 'ts-content-item' + index) {
        $displayItemContent = $(itemContent);
      }
    });
    if ($currentItemContent == null && $displayItemContent == null) {
      return false;
    }
    if ($currentItemContent != null) {
      $currentItemTitle.removeClass('current');
      $currentItemContent.removeClass('fadeIn').addClass('fadeOut');
    }

    setTimeout(function(){
      $displayItemContent.removeClass('fadeOut').addClass('fadeIn');
      $displayItemTitle.addClass('current');
      that.curIndex = index;
    }, 100);
  },

  handleClickOnTabTitle : function(index) {
    this.selectTab(index);
  }
});

module.exports = TabStrip;
