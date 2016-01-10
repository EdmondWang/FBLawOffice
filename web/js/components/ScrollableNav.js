var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/ScrollableNav.css');

var ScrollableNav = React.createClass({

  /**
  * state.navs = [
  *   {name: 'string', content: [html]}
  * }
  */
  getInitialState : function() {
    return {
      navs : []
    }
  },

  componentDidMount : function() {
    // TODO,replace by send AJAXJ
    this.setState({
      navs: [
        {
          'name': 'Hermes',
          'content': 'Hermes is a good place'
        },
        {
          'name': 'Diro',
          'content': 'enjoy your life now, oy h'
        }
      ]
    });
  },

  render : function() {
    var navs = null,
      navNames = [],
      navContents = [],
      that = this;
    if (!Array.isArray(this.state.navs)) {
      return;
    }
    this.curIndex = 0;
    navs = this.state.navs.map(function(nav, index){
      navNames.push(<div className='sn-navName' key={index} onClick={that.handleClickNav} data-index={index}>{nav.name}</div>);
      navContents.push(
        <div
          id={'sn-navContent-' + index}
          className='sn-navContent'
          key={index}
          data-index={index}>
          {nav.content}
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
