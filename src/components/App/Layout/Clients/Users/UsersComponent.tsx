import React from "react";

import { UserDataType } from "../../../../../store/users/types";

import { User } from "./User/UserContainer";

import styles from "./users.scss";

interface IUsersComponentProps {
  users: Array<UserDataType>;
}

export function UsersComponent({ users }: IUsersComponentProps) {
  return <ul className={styles["users"]}>{createUser(users)}</ul>;
}

function createUser(users: Array<UserDataType>) {
  return users.map((user) => {
    return (
      <li key={String(user.id)} className={styles["users__item"]}>
        <User user={user} />
        <span className={styles["users__item-line"]}></span>
      </li>
    );
  });
}
