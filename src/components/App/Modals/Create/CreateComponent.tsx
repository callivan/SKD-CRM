import React from "react";

import { Cross } from "../../Buttons/Cross";
import { Form } from "./Form";
import { AddContacts } from "./AddContacts";
import { Action } from "../../Buttons/Action";

import styles from "./create.scss";

interface IModalCreateComponentProps {
  modalType: "change" | "create";
  className?: string;
}

export function ModalCreateComponent({
  modalType,
  className,
}: IModalCreateComponentProps) {
  const isChange = modalType === "change";

  return (
    <div className={[styles["create-modal"], className].join(" ")}>
      <Cross
        className={styles["create-modal__cross"]}
        ariaLabel={`Закрыть модальное окно ${
          isChange ? "изменения данных клиента" : "создания клиента"
        }`}
      />
      <div className={styles["create-modal__wrapper"]}>
        <h3 className={styles["create-modal__title"]}>
          {isChange ? "Изменить данные" : "Новый клиент"}
          {isChange && (
            <span className={styles["create-modal__id"]}>{`ID: ${123}`}</span>
          )}
        </h3>
        <Form className={styles["create-modal__form"]} />
      </div>
      <AddContacts className={styles["create-modal__contacts"]} />
      <div className={styles["create-modal__btns"]}>
        <Action
          className={styles["create-modal__btn-save"]}
          ariaLabel="Сохранить данные клиента"
          children="Сохранить"
        />
        <button className={styles["create-modal__btn-remove"]}>
          {isChange ? "Удалить клиента" : "Отмена"}
        </button>
      </div>
    </div>
  );
}
