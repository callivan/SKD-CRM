import React from "react";

import { Select } from "./Select";

import { ContactsReducerActionType } from "../../useContactsReducer";
import { SocialType } from "../../../../../../store/get/types";

import styles from "./contact.scss";

interface IContacComponentProps {
  contact: SocialType;
  dispatch: React.Dispatch<ContactsReducerActionType>;
  className?: string;
}

export function Contact({
  contact,
  dispatch,
  className,
}: IContacComponentProps) {
  return (
    <div className={[styles["contact"], className].join(" ")}>
      <Select className={styles["contact__select"]} />
      <input
        className={styles["contact__input"]}
        type="text"
        placeholder="Введите данные"
        value={contact.data}
        onChange={(e) =>
          dispatch({
            type: "SET_CONTACT",
            data: { ...contact, data: e.currentTarget.value },
          })
        }
      />
      <button
        className={styles["contact__btn-close"]}
        aria-label="Удалить контакт"
      >
        <span className={styles["contact__btn-tooltip"]}>
          <span>Удалить контакт</span>
          <span></span>
        </span>
        <span className={styles["contact__btn-cross"]}>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  );
}
