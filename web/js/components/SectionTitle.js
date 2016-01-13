var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/SectionTitle.css');

var SectionTitle = React.createClass({

  componentDidMount : function() {

  },

  render : function() {
    return (
      <div className='s-title'>
        {this.props.text}
      </div>
    );
  }
});

module.exports = SectionTitle;
