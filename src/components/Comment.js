import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
    this.state = {
      // "DataSource" is some global data source
      comment: props.comment
    };
  }

  render() {
    console.log(this.state.comment);
    return (
      <div>
        {this.state.comment.id}: {this.state.comment.comment}
      </div>
    );
  }
}

export default Comment;