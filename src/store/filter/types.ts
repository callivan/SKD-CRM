import { UserDataType } from "../get/types";

export const USERS_FILTERED = "USERS_FILTERED";

export type UsersFilterType = {
  type: typeof USERS_FILTERED;
  data: Array<UserDataType>;
};
