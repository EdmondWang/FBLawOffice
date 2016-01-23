var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/UserProfile.css');

var userStore = {
  name: '',
  mail: '',
  phone: '',
  mail: '',
  avatr: ''
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
  componentWillRecevieProps : function(){
    debugger;
  },
  render : function() {
    return (
      <div className='up-container'>
        <div className='up-row'>
          <div className='up-cell up-name'>
            {this.state.name}
          </div>
          <div className='up-cell up-phone'>
            {this.state.phone}
          </div>
        </div>
        <div className='up-row'>
          <div className='up-cell up-field'>
            {this.state.field}
          </div>
          <div className='up-cell up-mail'>
            {this.state.mail}
          </div>
        </div>
        <div className='up-row'>
          <div className='up-avatr'>
            {this.state.avatr && <img src={this.state.avatr} />}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = UserProfile;
