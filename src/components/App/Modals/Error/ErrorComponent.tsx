import React from "react";

import { Action } from "../../Buttons/Action";

import styles from "./error.scss";

interface IErrorComponent {
  message: string;
  status: number | null;
}

export function ErrorComponent({ message, status }: IErrorComponent) {
  return (
    <>
      <h2 className={styles["error-modal__title"]}>
        {status ? `Error: ${status}` : "Error!"}
      </h2>
      <span className={styles["error-modal__text"]}>{message}</span>
      <Action
        className="error-modal__btn"
        children="Вернуться на главную"
        ariaLabel="Вернуться на гдавную страницу"
      />
    </>
  );
}
