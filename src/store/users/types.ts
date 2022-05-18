export const USERS_REQUEST = "USERS_REQUEST";
export const USERS_REQUEST_ERROR = "USERS_REQUEST_ERROR";
export const USERS_REQUEST_SUCCESS = "USERS_REQUEST_SUCCESS";

export type SocialType = {
  type: "phone" | "vk" | "fb" | "mail" | string;
  data: string;
};

export type UserDataType = {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  created: {
    date: Date;
    time: string;
  };
  changed: {
    date: Date;
    time: string;
  };
  social: Array<SocialType> | null;
};

export type UsersActionType = {
  loading: boolean;
  data: Array<UserDataType> | null;
  error: string | null;
};

export type UsersRequestType = {
  type: typeof USERS_REQUEST;
};

export type UsersRequestErrorType = {
  type: typeof USERS_REQUEST_ERROR;
  error: string;
};

export type UsersRequestSuccessType = {
  type: typeof USERS_REQUEST_SUCCESS;
  data: Array<UserDataType>;
};

export type UsersActionsTypes =
  | UsersRequestType
  | UsersRequestErrorType
  | UsersRequestSuccessType
