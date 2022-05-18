import React from "react";

import { UserDataType } from "../../../../../store/users/types";

import { UsersComponent } from "./UsersComponent";

interface IUsersProps {
  users: Array<UserDataType>;
}

export function Users({ users }: IUsersProps) {
  return <UsersComponent users={users} />;
}
