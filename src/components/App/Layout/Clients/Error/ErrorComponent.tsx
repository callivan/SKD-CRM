import React from "react";

import { Action } from "../../../Buttons/Action";

import styles from "./error.scss";

interface IErrorComponent {
  message: string;
}

export function ErrorComponent({ message }: IErrorComponent) {
  return (
    <div className={styles["error"]}>
      <h2 className={styles["error__title"]}>Error!</h2>
      <span className={styles["error__text"]}>{message}</span>
      <Action
        className="error__btn"
        children="Вернуться на главную"
        ariaLabel="Вернуться на гдавную страницу"
      />
    </div>
  );
}
