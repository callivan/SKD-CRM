import React from "react";

import styles from "./form.scss";

interface IFormComponentProps {
  className?: string;
}

export function FormComponent({ className }: IFormComponentProps) {
  return (
    <form className={[styles["form"], className].join(" ")}>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          required
          type="text"
          aria-label="Ввести фамилию клиента"
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
        />
        <span className={styles["form__placeholder"]}>
          Отчество<span>*</span>
        </span>
      </label>
    </form>
  );
}
