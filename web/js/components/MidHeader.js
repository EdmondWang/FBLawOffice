var React = require('react');
var WebI18n = require('./WebI18n');
var intlData = require('../locales/lang-zh-CN.js');

var MidHeader = React.createClass({
  render : function() {
    return (
      <div>
        <h2>
          <WebI18n {...intlData} webI18nKey={this.props.headerI18nKey} />
        </h2>
      </div>
    );
  }
});

module.exports = MidHeader;
