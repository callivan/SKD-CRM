import React from "react";

import Contact from "./Contact";

import styles from "./addcontacts.scss";

interface IAddContactsComponentProps {
  className?: string;
}

export function AddContactsComponent({
  className,
}: IAddContactsComponentProps) {
  return (
    <div className={[styles["add-contacts"], className].join(" ")}>
      <Contact/>
      <button
        className={styles["add-contacts__btn"]}
        aria-label="Добавить контакт клиента"
      >
        <span className={styles["add-contacts__btn-icon"]}></span>
        <span className={styles["add-contacts__btn-text"]}>
          Добавить контакт
        </span>
      </button>
    </div>
  );
}
