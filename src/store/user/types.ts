export const ACTIVE_USER = "ACTIVE_USER";

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

export type UserStateType = {
  user: UserDataType | null;
};

export type UserActionType = {
  type: typeof ACTIVE_USER;
  user: UserDataType;
};
