import React, { useEffect, useLayoutEffect } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { StateType } from "../../../../../store/rootTypes";
import { UserDataType } from "../../../../../store/users/types";

import { usersShow } from "./animation/show";

import { UsersComponent } from "./UsersComponent";

export function Users() {
  const navigate = useNavigate();
  const users = useSelector<StateType, Array<UserDataType> | null>(
    (state) => state.users.data
  );

  useLayoutEffect(() => {
    if (!users) return;
    usersShow();
  }, []);

  useEffect(() => {
    if (!users) {
      navigate("/", { replace: true });
    }
  }, []);

  if (!users) return null;

  return <UsersComponent users={users} />;
}
