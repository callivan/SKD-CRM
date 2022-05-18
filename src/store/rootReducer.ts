import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/reducer";
import { usersReducer } from "./users/reducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer
});
