import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";

import { getUsers, usesrRequestError } from "../get/actions";
import { UserDataType, UsersActionsTypes } from "../get/types";
import { UserDeleteActionType, USER_DELETE } from "./types";

export const userDeleteAction: ActionCreator<UserDeleteActionType> = () => ({
  type: USER_DELETE,
});

export const deleteUser =
  (user: UserDataType): ThunkAction<void, any, any, UsersActionsTypes> =>
  async (dispatch) => {
    try {
      dispatch(userDeleteAction());
      await fetch(`http://localhost:3001/users/${user.id}`, {
        method: "DELETE",
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
