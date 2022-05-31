import React from "react";
import { Select } from "./Select";
import { SocialType } from "../../../../../../store/request/types";

import styles from "./contact.scss";
import {
  ContactActionType,
  FormActionType,
} from "../../../../../../hooks/useUserReducer";

interface IContactComponentProps {
  contact: SocialType;
  dispatch: React.Dispatch<FormActionType | ContactActionType>;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectOpen: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ContactComponent({
  contact,
  dispatch,
  onClick,
  onChange,
  selectOpen,
  setSelect,
}: IContactComponentProps) {
  return (
    <>
      <Select
        className={styles["contact__select"]}
        contact={contact}
        dispatch={dispatch}
        selectOpen={selectOpen}
        setSelect={setSelect}
      />
      <input
        className={styles["contact__input"]}
        type="text"
        placeholder="Введите данные"
        value={contact.data}
        onChange={(e) => onChange(e)}
      />
      <button
        className={styles["contact__btn-close"]}
        aria-label="Удалить контакт"
        onClick={(e) => onClick(e)}
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
    </>
  );
}
