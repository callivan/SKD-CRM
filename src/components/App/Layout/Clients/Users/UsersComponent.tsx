import React from "react";
import { UserDataType } from "../../../../../store/request/types";
import { User } from "./User";

import styles from "./users.scss";

interface IUsersComponentProps {
  users: Array<UserDataType> | null;
}

export function UsersComponent({ users }: IUsersComponentProps) {
  return <ul className={styles["users"]}>{createUser(users)}</ul>;
}

function createUser(users: Array<UserDataType> | null) {
  if (!users) {
    return null;
  } else {
    return users.map((user) => {
      return (
        <li
          key={String(user.id)}
          id={String(user.id)}
          className={styles["users__item"]}
        >
          <User user={user} />
          <span className={styles["users__item-line"]}></span>
        </li>
      );
    });
  }
}
