var React = require('react');
var intlData = require('../locales/lang-zh-CN.js');
var css = require('../../css/components/MidHeader.css');

var MidHeader = React.createClass({
  render : function() {
    return (
      <div>
        <h2>
          {intlData.messages[this.props.headerI18nKey]}
        </h2>
      </div>
    );
  }
});

module.exports = MidHeader;
