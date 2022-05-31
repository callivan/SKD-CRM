import React from "react";
import {
  ContactActionType,
  FormActionType,
} from "../../../../../hooks/useUserReducer";
import { UserDataType } from "../../../../../store/request/types";
import styles from "./contacts.scss";

const Contact = React.lazy(() => import("./Contact"));

interface IContactsComponentProps {
  state: UserDataType;
  dispatch: React.Dispatch<FormActionType | ContactActionType>;
}

export function ContactsComponent({
  state,
  dispatch,
}: IContactsComponentProps) {
  return (
    <>
      <ul className={styles["add-contacts__list"]}>
        {createContac(state, dispatch)}
      </ul>
      <button
        className={styles["add-contacts__btn"]}
        aria-label="Добавить контакт клиента"
        disabled={state.social?.length === 10 ? true : false}
      >
        <span className={styles["add-contacts__btn-icon"]}></span>
        <span className={styles["add-contacts__btn-text"]}>
          Добавить контакт
        </span>
      </button>
    </>
  );
}

function createContac(
  state: UserDataType,
  dispatch: React.Dispatch<FormActionType | ContactActionType>
) {
  if (!state.social) return null;

  return state.social.map((contact) => {
    return (
      <li key={String(contact.id)} className={styles["add-contacts__item"]}>
        <Contact contact={contact} dispatch={dispatch} />
      </li>
    );
  });
}
