var React = require('react');
// var $ = require('jquery');
var commentBoxCss = require('../css/CommentBox.css');

var Comment = React.createClass({
  displayName: 'Comment',

  render: function() {
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span className='commentText'>{this.props.children}</span>
      </div>
    )
  }
});
var CommentList = React.createClass({
  displayName: 'CommentList',
  render: function() {
    var commentNodes = this.props.data.map(function(comment, index){
      return (
        <Comment key={index} author={comment.author}>{comment.text}</Comment>
      );
    });
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    )
  }
});
var CommentForm = React.createClass({
  displayName: 'CommentForm',
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var author = this.state.author;
    var text = this.state.text;
    if (author == '' || text == '') {
      return;
    }
    // TODO send a request to back-end
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function() {
    return (
      <form className='commentForm' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Your name' value={this.state.author} onChange={this.handleAuthorChange} />
        <input type='text' placeholder='Say something' value={this.state.text} onChange={this.handleTextChange} />
        <input type='submit' value='post' />
      </form>
    )
  }
});
var CommentBox = React.createClass({
  displayName: 'CommentBox',
  getInitialState: function() {
    return {data: []};
  },
  loadCommentsFromServer: function() {
    $.ajax({
      url: '/comments',
      method: 'GET',
      success: function(data) {
        this.setState({'data': data});
      }.bind(this),
      error: function(xhr, state, err) {
        console.error('url: /', status, err.toString());
      }.bind(this)
    })
  },
  handleCommentSubmit: function(comment) {
    debugger;
    $.ajax({
      url: '/comments',
      method: 'POST',
      dataType: 'JSON',
      data: comment,
      success: function(data) {
        debugger;
        this.setState({'data': data});
      }.bind(this),
      error: function(xhr, state, err) {
        debugger;
        console.error('url: /', status, err.toString());
      }.bind(this)
    })
  },
  componentDidMount: function() {
    this.loadCommentsFromServer();
    //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    )
  }
});

module.exports = CommentBox;
