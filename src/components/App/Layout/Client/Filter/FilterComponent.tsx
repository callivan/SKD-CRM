import React from "react";

import styles from "./filter.scss";

interface IFilterComponentProps {
  onClick: (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
  className?: string;
}

export function FilterComponent({ onClick, className }: IFilterComponentProps) {
  return (
    <ul
      className={[styles["filter"], className].join(" ")}
      onClick={(e) => onClick(e)}
    >
      <li key={"id"} className={styles["filter__name"]}>
        <button className={styles["filter__btn"]} data-attr="id">
          <span className={styles["filter__id-text"]}>ID</span>
          <span className={styles["filter__arrow"]}></span>
        </button>
      </li>
      <li key={"name"} className={styles["filter__name"]}>
        <button className={styles["filter__btn"]} data-attr="name">
          <span className={styles["filter__name-text"]}>
            Фамилия Имя Отчество
          </span>
          <span className={styles["filter__arrow"]}></span>
          <span className="filter__alphabet">А-Я</span>
        </button>
      </li>
      <li key={"date"} className={styles["filter__name"]}>
        <button className={styles["filter__btn"]} data-attr="created">
          <span className={styles["filter__date-text"]}>
            Дата и время создания
            <span className={styles["filter__arrow"]}></span>
          </span>
        </button>
      </li>
      <li key={"change"} className={styles["filter__name"]}>
        <button className={styles["filter__btn"]} data-attr="changed">
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
