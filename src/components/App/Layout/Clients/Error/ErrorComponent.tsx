import React from "react";

import styles from "./error.scss";

interface IErrorComponent {
  className?: string;
  message: string;
}

export function ErrorComponent({ message, className }: IErrorComponent) {
  return (
    <div className={[styles["error"], className].join(" ")}>
      <h2 className={styles["error__title"]}>Error!</h2>
      <span className={styles["error__text"]}>{message}</span>
    </div>
  );
}
