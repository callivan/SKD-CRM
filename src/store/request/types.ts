import { UsersFilterType } from "../filter/types";

export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_REQUEST_ERROR = "USERS_REQUEST_ERROR";
export const USERS_REQUEST_SUCCESS = "USERS_REQUEST_SUCCESS";
export const USER_POST = "USER_POST";
export const USER_PATCH = "USER_PATCH";
export const USER_DELETE = "USER_DELETE";

export type SocialType = {
  id: number;
  type: "phone" | "secondPhone" | "vk" | "fb" | "email" | string;
  data: string;
};

export type UserDataType = {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  created: {
    date: string;
    time: string;
  };
  changed: {
    date: string;
    time: string;
  };
  social: Array<SocialType> | null;
};

export type UsersActionType = {
  loading: boolean;
  data: Array<UserDataType> | null;
  error: { status: number | null; message: string | null };
};

export type UsersRequestType = {
  type: typeof USERS_REQUEST;
};

export type UsersRequestErrorType = {
  type: typeof USERS_REQUEST_ERROR;
  status: number;
  message: string;
};

export type UsersRequestSuccessType = {
  type: typeof USERS_REQUEST_SUCCESS;
  data: Array<UserDataType>;
};

export type UserPostActionType = {
  type: typeof USER_POST;
};

export type UserPatchActionType = {
  type: typeof USER_PATCH;
};

export type UserDeleteActionType = {
  type: typeof USER_DELETE;
};

export type UsersActionsTypes =
  | UsersRequestType
  | UsersRequestErrorType
  | UsersRequestSuccessType
  | UsersFilterType
  | UserDeleteActionType
  | UserPostActionType
  | UserPatchActionType;
