import { ADD_USER, EDIT_USER  } from '../actions/user_actions';

const initialState = {
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ADD_USER:
    return { ...state.user, newUser: action.newUser };
  case EDIT_USER:
    return;
  default:
    return state;
  }
}