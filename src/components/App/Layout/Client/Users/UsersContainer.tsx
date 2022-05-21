import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../../../store/rootTypes";
import { UserDataType } from "../../../../../store/get/types";

import { UsersComponent } from "./UsersComponent";

export function Users() {
  const users = useSelector<StateType, Array<UserDataType> | null>(
    (state) => state.data
  );

  if (!users) return null;

  return <UsersComponent users={users} />;
}
