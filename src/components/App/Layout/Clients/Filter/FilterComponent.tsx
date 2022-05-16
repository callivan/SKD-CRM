import React from "react";

import styles from "./filter.scss";

interface IFilterComponentProps {
  className?: string;
}

export function FilterComponent({ className }: IFilterComponentProps) {
  return (
    <ul className={[styles["filter"], className].join(" ")}>
      <li key={"id"} className={styles["filter__name"]}>
        <button className={styles["filter__btn"]}>
          <span className={styles["filter__id-text"]}>ID</span>
          <span className={styles["filter__arrow"]}></span>
        </button>
      </li>
      <li key={"name"} className={styles["filter__name"]}>
        <button className={styles["filter__btn"]}>
          <span className={styles["filter__name-text"]}>
            Фамилия Имя Отчество
          </span>
          <span className={styles["filter__arrow"]}></span>
          <span className="filter__alphabet">А-Я</span>
        </button>
      </li>
      <li key={"date"} className={styles["filter__name"]}>
        <button className={styles["filter__btn"]}>
          <span className={styles["filter__date-text"]}>
            Дата и время создания
            <span className={styles["filter__arrow"]}></span>
          </span>
        </button>
      </li>
      <li key={"change"} className={styles["filter__name"]}>
        <button className={styles["filter__btn"]}>
          <span className={styles["filter__change-text"]}>
            Последние изменения
            <span className={styles["filter__arrow"]}></span>
          </span>
        </button>
      </li>
      <li key={"contacts"} className={styles["filter__name"]}>
        Контакты
      </li>
      <li key={"actions"} className={styles["filter__name"]}>
        Действия
      </li>
    </ul>
  );
}
