import React from "react";
import { Action } from "../../Buttons/Action";
import { Cross } from "../../Buttons/Cross";
import Loader from "../../Loader";

import styles from "./remove.scss";

export function ModalRemoveComponent({ showLoader }: { showLoader: boolean }) {
  
  return (
    <>
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
          className="remove-modal__remove"
          ariaLabel="Подтвердить удаление клиента"
        >
          {showLoader && <Loader type="small" />}
          Удалить
        </Action>
        <button
          className={styles["remove-modal__cancel"]}
          aria-label="Отменить удаление клиента"
        >
          Отмена
        </button>
      </div>
    </>
  );
}
