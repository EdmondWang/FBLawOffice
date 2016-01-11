var React = require('react');
var $ = require('jquery');
var css = require('../../css/components/Paragraph.css');

var Paragraph = React.createClass({

  /**
  *
  * data : [{header: '', text: ''}]
  */
  getInitialState : function() {
    return {
      data: [

      ]
    }
  },

  getSource : function() {
    if (this.props.source) {
      if (typeof this.props.source == 'string') {
        $.ajax({
          url: this.props.source,
          success: $.proxy(function(data){
            if (data != null) {
              this.setState({
                data: data.paragraphs
              });
            }
          }, this),
          error: function(err) {
            console.log(err);
          }
        });
      }
    }
  },

  componentWillMount : function(){
    this.getSource();
  },

  render : function() {
    var paragraphs = this.state.data.map(function(paragraph, index){
      var result = [];
      if (paragraph.header) {
        result.push(<p className='p-header'>{paragraph.header}</p>);
      }
      result.push(<p className='p-text'>{paragraph.text}</p>);
      return result;
    });
    return (
      <div className='p'>
        {paragraphs}
      </div>
    );
  }
});

module.exports = Paragraph;
