var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/UserProfile.css');
var intlData = require('../locales/lang-zh-CN.js');
var json2md = require('json2md');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(), // An object containing functions to render tokens to HTML.
  gfm: true, // Enable GitHub flavored markdown.
  tables: true, // Enable GFM tables. This option requires the gfm option to be true.
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

/*
  name: '',
  mail: '',
  phone: '',
  mail: '',
  avatr: ''
*/
var userStore = {
};

var UserProfile = React.createClass({

  getInitialState : function() {
    return userStore;
  },
  componentDidMount : function() {
    // MAY be AJAX in the future
  },
  componentWillUnmount : function() {
  },
  createMarkdown : function(str) {
    var htmlStr = '';
    if (str != null && typeof str != 'undefined') {
      htmlStr = marked(json2md(str));
    }
    debugger;
    return {__html: htmlStr};
  },
  render : function() {
    return (
      <div className='up-container'>
        <div className='up-left'>
          <div className='up-row'>
            <div className='up-cell up-name'>
              {this.state.name}
            </div>
            <div className='up-cell up-phone'>
              <div className='up-label'>
                {intlData.messages.TEXT_ConactPhone}&nbsp;:
              </div>
              <div className='up-value'>
                {this.state.phone}
              </div>
            </div>
          </div>
          <div className='up-row'>
            <div className='up-cell up-field'>
              <div className='up-label'>
                &nbsp;
              </div>
              <div className='up-value'>
                {this.state.field}
              </div>
            </div>
            <div className='up-cell up-mail'>
              <div className='up-label'>
                {intlData.messages.TEXT_Mail}&nbsp;:
              </div>
              <div className='up-value'>
                {this.state.mail}
              </div>
            </div>
          </div>
          <div className='up-row'>
            <div className='up-avatr'>
              {this.state.avatr && <img src={'/img/' + this.state.avatr} />}
            </div>
          </div>
        </div>
        <div className='up-right'>
          <div
            className='up-row'
            dangerouslySetInnerHTML={this.createMarkdown(this.state.description)}
          />
        </div>
      </div>
    );
  }

});

module.exports = UserProfile;
