import { UserDataType } from "../request/types";

export const USERS_FILTERED = "USERS_FILTERED";

export type UsersFilterType = {
  type: typeof USERS_FILTERED;
  users: Array<UserDataType>;
};
