import React from "react";

import { Action } from "../../Buttons/Action";
import { Cross } from "../../Buttons/Cross";

import styles from "./remove.scss";

interface IModalRemoveComponentProps {
  className?: string;
}

export function ModalRemoveComponent({
  className,
}: IModalRemoveComponentProps) {
  return (
    <div className={[styles["remove-modal"], className].join(" ")}>
      <Cross
        className={styles["remove-modal__cross"]}
        ariaLabel="Закрыть модальное окно удаления клиента"
      />
      <h3 className={styles["remove-modal__title"]}>Удалить клиента</h3>
      <span className={styles["remove-modal__text"]}>
        Вы действительно хотите удалить данного клиента?
      </span>
      <div className={styles["remove-modal__btns"]}>
        <Action
          className={styles["remove-modal__remove"]}
          children="Удалить"
          ariaLabel="Подтвердить удаление клиента"
        />
        <button
          className={styles["remove-modal__cancel"]}
          aria-label="Отменить удаление клиента"
        >
          Отмена
        </button>
      </div>
    </div>
  );
}
