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
    if (!$.isArray(this.state.navs)) {
      return;
    }
    navs = this.state.navs.map(function(nav, index){
      navNames.push(<div className='sn-navName' key={index} onClick={that.handleClickNav}>{nav.name}</div>);
      navContents.push(<div className='sn-navContent' key={index}>{nav.content}</div>);
    });
    return (
      <div className='sn-container'>
        <div className='sn-navNameBar'>
          {navNames}
        </div>
        <div className='sn-navContentList'>
          {navContents}
        </div>
      </div>
    );
  },

  handleClickNav : function() {

  }
});

module.exports = ScrollableNav;
