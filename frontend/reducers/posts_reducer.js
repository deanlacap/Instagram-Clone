import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/posts_actions';

const postsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      newState[action.post.id] = action.post;

      return newState;
    case REMOVE_POST:
      delete newState[action.id];

      return newState;
  } 

  return oldState;
};

export default postsReducer;