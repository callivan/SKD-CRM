import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { getUsers, usesrRequestError } from "../get/actions";

import { UserDataType, UsersActionsTypes } from "../get/types";
import { UserPostActionType, USER_POST } from "./types";

export const userPostAction: ActionCreator<UserPostActionType> = () => ({
  type: USER_POST,
});

export const postUser =
  (user: UserDataType): ThunkAction<void, any, any, UsersActionsTypes> =>
  async (dispatch) => {
    try {
      dispatch(userPostAction);
      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      });
      dispatch(getUsers());
    } catch (err: any) {
      dispatch(usesrRequestError(err.message));
    }
  };
