import React from "react";

import styles from "./form.scss";

interface IFormComponentProps {
  className?: string;
  state: { name: string; surname: string; patronymic: string };
  onChanges: {
    name: React.Dispatch<React.SetStateAction<string>>;
    surname: React.Dispatch<React.SetStateAction<string>>;
    patronymic: React.Dispatch<React.SetStateAction<string>>;
  };
}

export function FormComponent({
  className,
  state,
  onChanges,
}: IFormComponentProps) {
  return (
    <form className={[styles["form"], className].join(" ")}>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          required
          type="text"
          aria-label="Ввести фамилию клиента"
          value={state.surname}
          onChange={(e) => onChanges.surname(e.currentTarget.value)}
          data-noempty={state.surname.trim().length && true}
        />
        <span className={styles["form__placeholder"]}>
          Фамилия<span>*</span>
        </span>
      </label>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          required
          type="text"
          aria-label="Ввести имя клиента"
          value={state.name}
          onChange={(e) => onChanges.name(e.currentTarget.value)}
          data-noempty={state.name.trim().length && true}
        />
        <span className={styles["form__placeholder"]}>
          Имя<span>*</span>
        </span>
      </label>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          required
          type="text"
          aria-label="Ввести отчество клиента"
          value={state.patronymic}
          onChange={(e) => onChanges.patronymic(e.currentTarget.value)}
          data-noempty={state.patronymic.trim().length && true}
        />
        <span className={styles["form__placeholder"]}>
          Отчество<span>*</span>
        </span>
      </label>
    </form>
  );
}
