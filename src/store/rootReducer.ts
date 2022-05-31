import { Reducer } from "@reduxjs/toolkit";

import { USERS_FILTERED } from "./filter/types";

import {
  UsersActionsTypes,
  UsersActionType,
  USERS_REQUEST,
  USERS_REQUEST_ERROR,
  USERS_REQUEST_SUCCESS,
} from "./request/types";

const initialUsers: UsersActionType = {
  loading: true,
  data: null,
  error: { status: null, message: null },
};

export const rootReducer: Reducer<UsersActionType, UsersActionsTypes> = (
  state = initialUsers,
  action
) => {
  switch (action.type) {
    case USERS_REQUEST:
      return state;
    case USERS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: { status: action.status, message: action.message },
      };
    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: { status: null, message: null },
        data: action.data,
      };
    case USERS_FILTERED:
      return {
        ...state,
        data: action.users,
      };
    default:
      return state;
  }
};
