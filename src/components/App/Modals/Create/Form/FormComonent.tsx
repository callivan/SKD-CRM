import React from "react";

import styles from "./form.scss";

export function FormComponent() {
  return (
    <>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          pattern="[A-Za-zА-Яа-яЁё]{1,}"
          type="text"
          name="surname"
          aria-label="Ввести фамилию клиента"
          placeholder=" "
        />
        <span className={styles["form__placeholder"]}>
          Фамилия <span>*</span>
        </span>
      </label>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          pattern="[A-Za-zА-Яа-яЁё]{1,}"
          type="text"
          name="name"
          aria-label="Ввести имя клиента"
          placeholder=" "
        />
        <span className={styles["form__placeholder"]}>
          Имя <span>*</span>
        </span>
      </label>
      <label className={styles["form__label"]}>
        <input
          className={styles["form__input"]}
          pattern="[A-Za-zА-Яа-яЁё]{1,}"
          type="text"
          name="patronymic"
          aria-label="Ввести отчество клиента"
          placeholder=" "
        />
        <span className={styles["form__placeholder"]}>
          Отчество <span>*</span>
        </span>
      </label>
    </>
  );
}
