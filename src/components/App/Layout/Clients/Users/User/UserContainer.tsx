import React from "react";

import { UserDataType } from "../../../../../../store/users/types";

import { UserComponent } from "./UserComponent";

interface IUserProps {
  user: UserDataType;
}

export function User({ user }: IUserProps) {
  return <UserComponent user={user} />;
}
