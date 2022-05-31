import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../../../store/rootTypes";
import { UserDataType } from "../../../../../store/request/types";
import { UsersComponent } from "./UsersComponent";
import { usersShow } from "./animations/show";

export function Users() {
  const users = useSelector<StateType, Array<UserDataType> | null>(
    (state) => state.data
  );

  useEffect(() => {
    //Анимация появления блока Users, если данные клиентов есть, то анимация запускается, в противном случае нет.
    usersShow(users?.length ? true : false);
  }, [users]);

  return <UsersComponent users={users} />;
}
