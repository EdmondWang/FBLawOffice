var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/UserProfile.css');
var intlData = require('../locales/lang-zh-CN.js');

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
          <div className='up-row'>
            {this.state.description}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserProfile;
