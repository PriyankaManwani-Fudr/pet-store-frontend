// redux/reducers/authReducer.js

import {  LOGOUT, LOGIN } from "../actions";

const initialState = {
  currentUser: null, // The currently signed-in user
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default authReducer;
