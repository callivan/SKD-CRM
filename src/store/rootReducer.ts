import { Reducer } from "@reduxjs/toolkit";
import { USER_DELETE } from "./delete/types";

import { USERS_FILTERED } from "./filter/types";

import {
  UsersActionsTypes,
  UsersActionType,
  USERS_REQUEST,
  USERS_REQUEST_ERROR,
  USERS_REQUEST_SUCCESS,
} from "./get/types";

const initialUsers: UsersActionType = {
  loading: true,
  data: null,
  error: null,
};

export const rootReducer: Reducer<UsersActionType, UsersActionsTypes> = (
  state = initialUsers,
  action
) => {
  switch (action.type) {
    case USERS_REQUEST:
      return state;
    case USERS_REQUEST_ERROR:
      return { ...state, loading: false, error: action.error };
    case USERS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };
    case USERS_FILTERED:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};
