import React from "react";

import { SocialType } from "../../../../../store/get/types";
import {
  StateContactsReducer,
  ContactsReducerActionType,
} from "../useContactsReducer";

import styles from "./contacts.scss";

interface IContactsProps {
  contactsState: StateContactsReducer;
  contactsDispatch: React.Dispatch<ContactsReducerActionType>;
  className?: string;
}

const Contact = React.lazy(() => import("./Contact"));

export function Contacts({
  contactsState,
  contactsDispatch,
  className,
}: IContactsProps) {
  return (
    <div
      className={[
        styles["add-contacts"],
        className,
        contactsState && "add",
      ].join(" ")}
    >
      <ul className={styles["add-contacts__list"]}>
        {contactsState && createContac(contactsState, contactsDispatch)}
      </ul>
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

function createContac(
  contacts: Array<SocialType>,
  dispatch: React.Dispatch<ContactsReducerActionType>
) {
  return contacts.map((contact) => {
    if (!contact.data) {
      return null;
    }

    return (
      <li key={String(contact.id)} className={styles["add-contacts__item"]}>
        <Contact contact={contact} dispatch={dispatch} />
      </li>
    );
  });
}
