import React from "react";

import { Cross } from "../../Buttons/Cross";
import { Form } from "./Form";
import { Contacts } from "./Contacts";
import { Action } from "../../Buttons/Action";

import { FormReducerActionType, StateFormReducer } from "./useFormReducer";
import {
  StateContactsReducer,
  ContactsReducerActionType,
} from "./useContactsReducer";

import styles from "./create.scss";

interface IModalCreateComponentProps {
  id?: number;
  formState: StateFormReducer;
  contactsState: StateContactsReducer;
  modalType: "change" | "create";
  formDispatch: React.Dispatch<FormReducerActionType>;
  contactsDispatch: React.Dispatch<ContactsReducerActionType>;
}

export function ModalCreateComponent({
  id,
  formState,
  contactsState,
  formDispatch,
  contactsDispatch,
  modalType,
}: IModalCreateComponentProps) {
  const isModalCreate = modalType === "create";

  return (
    <div className={styles["create-modal"]}>
      <Cross
        className={styles["create-modal__cross"]}
        ariaLabel="Закрыть модальное окно создания клиента"
      />
      <div className={styles["create-modal__wrapper"]}>
        <h3 className={styles["create-modal__title"]}>
          {isModalCreate ? (
            "Новый клиент"
          ) : (
            <>
              {"Изменить данные"}
              <span className={styles["create-modal__id"]}>{`ID: ${id}`}</span>
            </>
          )}
        </h3>
        <Form
          className={styles["create-modal__form"]}
          formState={formState}
          formDispatch={formDispatch}
        />
      </div>
      <Contacts
        className={styles["create-modal__contacts"]}
        contactsState={contactsState}
        contactsDispatch={contactsDispatch}
      />
      <div className={styles["create-modal__btns"]}>
        <Action
          className="create-modal__btn-save"
          ariaLabel={
            isModalCreate
              ? "Сохранить данные клиента"
              : "Сохранить измененные данные клиента"
          }
          children="Сохранить"
        />
        <button
          className={styles["create-modal__btn-cancel"]}
          aria-label={
            isModalCreate ? "Отменить создание клиента" : "Удалить клиента"
          }
        >
          {isModalCreate ? "Отмена" : "Удалить клиента"}
        </button>
      </div>
    </div>
  );
}
