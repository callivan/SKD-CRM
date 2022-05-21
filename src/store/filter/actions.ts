import { ActionCreator } from "@reduxjs/toolkit";
import { UserDataType } from "../get/types";
import { UsersFilterType, USERS_FILTERED } from "./types";

export const usersFilter: ActionCreator<UsersFilterType> = (
  data: Array<UserDataType>
) => ({
  type: USERS_FILTERED,
  data,
});
