import React from "react";

import { FormReducerActionType, StateFormReducer } from "../useFormReducer";

import styles from "./form.scss";

interface IFormProps {
  formState: StateFormReducer;
  formDispatch: React.Dispatch<FormReducerActionType>;
  className?: string;
}

export function Form({
  formState,
  formDispatch,
  className,
}: IFormProps) {
  return (
    <form autoComplete="off" className={[styles["form"], className].join(" ")}>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          required
          type="text"
          name="surname"
          aria-label="Ввести фамилию клиента"
          placeholder=" "
          value={formState.surname}
          onChange={(e) =>
            formDispatch({
              type: "SET_SURNAME",
              data: { ...formState, surname: e.currentTarget.value },
            })
          }
        />
        <span className={styles["form__placeholder"]}>
          Фамилия <span>*</span>
        </span>
      </label>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          required
          type="text"
          name="name"
          aria-label="Ввести имя клиента"
          placeholder=" "
          value={formState.name}
          onChange={(e) =>
            formDispatch({
              type: "SET_NAME",
              data: { ...formState, name: e.currentTarget.value },
            })
          }
        />
        <span className={styles["form__placeholder"]}>
          Имя <span>*</span>
        </span>
      </label>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          required
          type="text"
          name="patronymic"
          aria-label="Ввести отчество клиента"
          placeholder=" "
          value={formState.patronymic}
          onChange={(e) =>
            formDispatch({
              type: "SET_PATRONYMIC",
              data: { ...formState, patronymic: e.currentTarget.value },
            })
          }
        />
        <span className={styles["form__placeholder"]}>
          Отчество <span>*</span>
        </span>
      </label>
    </form>
  );
}
