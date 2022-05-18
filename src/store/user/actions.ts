import { ActionCreator } from "@reduxjs/toolkit";
import { ACTIVE_USER, UserActionType, UserDataType } from "./types";

export const activeUser: ActionCreator<UserActionType> = (
  user: UserDataType
) => ({
  type: ACTIVE_USER,
  user,
});
