import { connect } from 'react-redux';
import { fetchPost, deletePost, editPost } from '../../actions/posts_actions';
import EditPost from './post_edit_form';

const mapStateToProps = (state, ownProps) => {
  return ({
    post: state.entities.posts[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (id) => dispatch(fetchPost(id)),
  editPost: (post) => dispatch(editPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);

