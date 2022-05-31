import { ActionCreator } from "@reduxjs/toolkit";
import { UserDataType } from "../request/types";
import { UsersFilterType, USERS_FILTERED } from "./types";

export const usersFilter: ActionCreator<UsersFilterType> = (
  users: Array<UserDataType>
) => ({
  type: USERS_FILTERED,
  users,
});
