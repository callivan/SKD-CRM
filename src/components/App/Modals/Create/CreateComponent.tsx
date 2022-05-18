import React from "react";

import { Cross } from "../../Buttons/Cross";
import { Form } from "./Form";
import { AddContacts } from "./AddContacts";
import { Action } from "../../Buttons/Action";

import { UserDataType } from "../../../../store/user/types";

import styles from "./create.scss";

interface IModalCreateComponentProps {
  className?: string;
  user: UserDataType | null;
}

export function ModalCreateComponent({
  className,
  user,
}: IModalCreateComponentProps) {
  return (
    <div className={[styles["create-modal"], className].join(" ")}>
      <Cross
        className={styles["create-modal__cross"]}
        ariaLabel={`Закрыть модальное окно ${
          user ? "изменения данных клиента" : "создания клиента"
        }`}
      />
      <div className={styles["create-modal__wrapper"]}>
        <h3 className={styles["create-modal__title"]}>
          {user ? "Изменить данные" : "Новый клиент"}
          {user && (
            <span
              className={styles["create-modal__id"]}
            >{`ID: ${user.id}`}</span>
          )}
        </h3>
        <Form className={styles["create-modal__form"]} user={user} />
      </div>
      <AddContacts className={styles["create-modal__contacts"]} />
      <div className={styles["create-modal__btns"]}>
        <Action
          className="create-modal__btn-save"
          ariaLabel="Сохранить данные клиента"
          children="Сохранить"
        />
        <button className={styles["create-modal__btn-cancel"]}>
          {"Отмена"}
        </button>
      </div>
    </div>
  );
}
