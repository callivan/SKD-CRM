import React, { Suspense } from "react";

import { useNavigate } from "react-router-dom";

import { UserDataType } from "../../../../../../store/users/types";

import styles from "./user.scss";

const Social = React.lazy(() => import("./Social"));

interface IUserComponentProps {
  user: UserDataType;
}

export function UserComponent({ user }: IUserComponentProps) {
  const navigate = useNavigate();

  return (
    <ul className={styles["user"]}>
      <li key={"id"} className={styles["user__column"]}>
        <span className={styles["user__id"]}>{user.id}</span>
      </li>
      <li key={"name"} className={styles["user__column"]}>
        <span
          className={styles["user__name"]}
        >{`${user.surname} ${user.name} ${user.patronymic}`}</span>
      </li>
      <li key={"date-add"} className={styles["user__column"]}>
        <span className={styles["user__date"]}>
          {createDate(user.created.date)}
        </span>
        <span className={styles["user__time"]}>{user.created.time}</span>
      </li>
      <li key={"date-change"} className={styles["user__column"]}>
        <span className={styles["user__date"]}>
          {createDate(user.changed.date)}
        </span>
        <span className={styles["user__time"]}>{user.changed.time}</span>
      </li>
      <li key={"social"} className={styles["user__column"]}>
        <Suspense>{user.social && <Social social={user.social} />}</Suspense>
      </li>
      <li key={"actions"} className={styles["user__column"]}>
        <button
          className={styles["user__btn-change"]}
          aria-label="Изменить данные клиента"
          onClick={() => {
            navigate(`change/${user.id}`);
          }}
        >
          <svg
            className={styles["user__pen-icon"]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles["user__pen"]}
              d="M2 11.5002V14.0002H4.5L11.8733 6.62687L9.37333 4.12687L2 11.5002ZM13.8067 4.69354C14.0667 4.43354 14.0667 4.01354 13.8067 3.75354L12.2467 2.19354C11.9867 1.93354 11.5667 1.93354 11.3067 2.19354L10.0867 3.41354L12.5867 5.91354L13.8067 4.69354Z"
            />
          </svg>
          <span className={styles["user__btn-text"]}>Изменить</span>
        </button>
        <button
          className={styles["user__btn-remove"]}
          aria-label="Удалить данные клиента"
          onClick={() => {
            navigate(`remove/${user.id}`);
          }}
        >
          <svg
            className={styles["user__cross-icon"]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles["user__cross"]}
              d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z"
            />
          </svg>
          <span className={styles["user__btn-text"]}>Удалить</span>
        </button>
      </li>
    </ul>
  );
}

function createDate(date: Date) {
  const year = `${new Date(date).getFullYear()}`;
  const month =
    new Date(date).getMonth() + 1 < 10
      ? `0${new Date(date).getMonth() + 1}`
      : new Date(date).getMonth() + 1;
  const day =
    new Date(date).getDate() < 10
      ? `0${new Date(date).getDate()}`
      : new Date(date).getDate();

  return `${day}.${month}.${year}`;
}
