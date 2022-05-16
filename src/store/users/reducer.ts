import { Reducer } from "@reduxjs/toolkit";
import {
  UsersActionsTypes,
  UsersActionType,
  USERS_REQUEST,
  USERS_REQUEST_ERROR,
  USERS_REQUEST_SUCCESS,
} from "./types";

const initialUsers: UsersActionType = {
  loading: true,
  data: null,
  error: null,
};

export const usersReducer: Reducer<UsersActionType, UsersActionsTypes> = (
  state = initialUsers,
  action
) => {
  switch (action.type) {
    case USERS_REQUEST:
      return state;
    case USERS_REQUEST_ERROR:
      return { ...state, loading: false, error: action.error };
    case USERS_REQUEST_SUCCESS:
      return { loading: false, error: null, data: action.data };
    default:
      return state;
  }
};
