var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/ScrollableNav.css');
var ScrollableNavItem = require('./ScrollableNavItem.js');

var ScrollableNav = React.createClass({

  componentDidMount : function() {

  },

  render : function() {
    var navs = null,
      navNames = [],
      navContents = [],
      that = this;

    this.curIndex = 0;
    React.Children.map(this.props.children, function(child, index) {
      if (child.type.displayName != 'ScrollableNavItem') {
        return child;
      }
      navNames.push(<div className='sn-navName' key={index} onClick={that.handleClickNav} data-index={index}>{child.props.name}</div>);
      navContents.push(
        <div
          id={'sn-navContent-' + index}
          className='sn-navContent'
          key={index}
          data-index={index}>
          {child.props.children}
        </div>
      );
    });

    return (
      <div className='sn-container'>
        <div className='sn-navNameBar'>
          {navNames}
        </div>
        <div className='sn-viewport' ref='navViewport'>
          <div className='sn-navContentList' ref='navContentList'>
            {navContents}
          </div>
        </div>
      </div>
    );
  },

  handleClickNav : function(event) {
    event.stopPropagation();
    event.preventDefault();
    var index = $(event.target).data('index'),
      $navContentList = $(this.refs.navContentList),
      navViewport = this.refs.navViewport;
    if (index == this.curIndex) {
      return;
    }
    $navContentList.animate({'top': '-' + index * navViewport.offsetHeight + 'px'}, 500);
    this.curIndex = index;
  }
});

module.exports = ScrollableNav;
