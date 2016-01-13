var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/Section.css');

var Section = React.createClass({

  componentDidMount : function() {

  },

  renderChildren: function () {
    return React.Children.map(this.props.children, function (child) {
      if (child.type.displayName == 'SectionTitle' || child.type.displayName == 'SectionContent') {
        return child;
      }
    });
  },

  render : function() {
    var childs = this.renderChildren();
    return (
      <div className='s'>
        {childs}
      </div>
    );
  }
});

module.exports = Section;
