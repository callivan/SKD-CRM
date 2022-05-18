import { Reducer } from "@reduxjs/toolkit";
import { ACTIVE_USER, UserActionType, UserStateType } from "./types";

const initialUser: UserStateType = {
  user: null,
};

export const userReducer: Reducer<UserStateType, UserActionType> = (
  state = initialUser,
  action
) => {
  switch (action.type) {
    case ACTIVE_USER:
      return { user: action.user };
    default:
      return state;
  }
};
