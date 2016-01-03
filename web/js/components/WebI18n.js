var React = require('react');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedMessage = ReactIntl.FormattedMessage;

var WebI18n = React.createClass({
  mixins: [IntlMixin],
  render : function() {
    var key = this.props.webI18nKey;
    console.log(key);
    return (
      <FormattedMessage message={this.getIntlMessage(key)} />
    );
  }
});

module.exports = WebI18n;
