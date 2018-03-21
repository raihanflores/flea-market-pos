import React from 'react';
import Comment from './Comment';

const DataSource = {
  getComments: () => {
    return [{ id: 1, comment: "some text" }];
  },
  addChangeListener: () => {
    //do nothing
  }
};

class Comments extends React.Component {
  constructor(props) {
    super(props);
    console.log(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      // "DataSource" is some global data source
      comments: DataSource.getComments()
    };
  }

  componentDidMount() {
    // Subscribe to changes
    DataSource.addChangeListener(this.handleChange);
  }

  componentWillUnmount() {
    // Clean up listener
    DataSource.removeChangeListener(this.handleChange);
  }

  handleChange() {
    // Update component state whenever the data source changes
    this.setState({
      comments: DataSource.getComments()
    });
  }

  render() {
    return (
      <div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}

export default Comments;
