import axios from 'axios';

export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';

export const registerUser = (user, redirectCallback) => {
  console.log('user', user);
  return dispatch => {
    return axios.post('http://localhost:8080/register', {
      email: user.email,
      username: user.username,
      password: user.password
    })
    .then(user => {
      console.log('user', user.data);
      dispatch({
        type: ADD_USER,
        newUser: user.data
      });
      redirectCallback();
    })
    .catch(err => {
      console.log('err', err);
      return dispatch({
        type: ADD_USER,
        user: {}
      });
    });
  };
};

export const editUser = (user) => {

};