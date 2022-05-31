import React from "react";
import { Cross } from "../../Buttons/Cross";
import { Form } from "./Form";
import { Contacts } from "./Contacts";
import { Action } from "../../Buttons/Action";

import styles from "./create.scss";

const Loader = React.lazy(() => import("../../Loader"));

export function ModalCreateComponent({
  id,
  errorState,
  showLoader,
}: {
  id: number | null;
  errorState: Array<string> | null;
  showLoader: boolean;
}) {
  return (
    <div className={styles["create-modal"]}>
      <Cross
        className={styles["create-modal__cross"]}
        ariaLabel="Закрыть модальное окно создания клиента"
      />
      <div className={styles["create-modal__wrapper"]}>
        <h3 className={styles["create-modal__title"]}>
          {!id ? "Новый клиент" : "Изменить данные"}
          {id && <span>{`ID: ${id}`}</span>}
        </h3>
        <Form className={styles["create-modal__form"]} />
      </div>
      <Contacts className={styles["create-modal__contacts"]} />
      <div className={styles["create-modal__errors"]}>
        {errorState?.map((error, index) => (
          <span key={error + index}>{error}</span>
        ))}
      </div>
      <div className={styles["create-modal__btns"]}>
        <Action
          className="create-modal__btn-save"
          ariaLabel="Сохранить данные клиента"
          disabled={errorState ? true : false}
        >
          {showLoader && <Loader type="small" />}
          Сохранить
        </Action>
        <button
          className={styles["create-modal__btn-cancel"]}
          aria-label="Отменить создание клиента"
        >
          {!id ? "Отмена" : "Удалить клиента"}
        </button>
      </div>
    </div>
  );
}
