import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FETCH_POST } from '../actions/types';

class Posts extends Component {

  componentWillMount() {
    console.log(this.props);
    const { fetchPost } = this.props;
    fetchPost();
  }

  render() {
    const { posts } = this.props;
    const postItems = posts && posts.map(p => (
      <div key={p.id}>
        <h3>{p.title}</h3>
        <p>{p.body}</p>
      </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

const mapDispatchToProps = dispatch => ({
  fetchPost: () => dispatch({ type: FETCH_POST })
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts);