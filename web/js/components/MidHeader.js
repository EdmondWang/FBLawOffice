var React = require('react');
var WebI18n = require('./WebI18n');

var intlData = {
    'locales': 'en-US',
    'messages': {
        'MENU_News&Deals': 'News and Deals'
    }
};

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
