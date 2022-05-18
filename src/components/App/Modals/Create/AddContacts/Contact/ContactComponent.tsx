import React from "react";

import { Select } from "./Select";

import styles from "./contact.scss";

interface IContacComponentProps {
  className?: string;
}

export function ContactComponent({ className }: IContacComponentProps) {
  return (
    <div className={[styles["contact"], className].join(" ")}>
      <Select className={styles["contact__select"]} />
      <input
        className={styles["contact__input"]}
        type="text"
        placeholder="Введите данные"
      />
      <button
        className={styles["contact__btn-close"]}
        aria-label="Удалить контакт"
      >
        <span className={styles["contact__btn-cross"]}>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  );
}
