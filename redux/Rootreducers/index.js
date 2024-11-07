// redux/reducers/index.js

import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import authReducer from "./AuthReducer";

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
});

export default rootReducer;
