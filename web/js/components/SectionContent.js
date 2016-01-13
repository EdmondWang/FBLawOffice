var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/SectionContent.css');

var SectionContent = React.createClass({

  componentDidMount : function() {

  },

  render : function() {
    return (
      <div className='s-content'>
        {this.props.children}
      </div>
    );
  }
});

module.exports = SectionContent;
