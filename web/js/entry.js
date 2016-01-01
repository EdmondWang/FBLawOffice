var data = [
  {'author': 'Edmond', 'text': 'This is a comment hosted by Edmond. '},
  {'author': 'Jocelyn', 'text': 'This is a comment hosted by Jocelyn. '},
  {'author': 'Edison', 'text': 'This is a comment hosted by Edison. '},
];

var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./CommentBox');

ReactDOM.render(<CommentBox url='/' pollInterval={2000} />, document.getElementById('content'));
