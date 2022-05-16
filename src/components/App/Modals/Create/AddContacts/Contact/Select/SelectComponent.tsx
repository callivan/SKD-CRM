import React from "react";

import styles from "./select.scss";

interface ISelecComponentProps {
  activeField: string;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

export function SelectComponent({
  activeField,
  onClick,
  className,
}: ISelecComponentProps) {
  return (
    <div
      className={[styles["select"], className].join(" ")}
      onClick={(e) => onClick(e)}
    >
      <button
        className={styles["select__btn"]}
        aria-label="Развернуть список для выбора контакта"
      >
        <span className={styles["select__btn-text"]}>{activeField}</span>
        <span className={styles["select__btn-arrow"]}></span>
      </button>
      <ul className={styles["select__list"]}>
        <li className={[styles["select__item"], "active"].join(" ")}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить телефон"
          >
            Телефон
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить дополнительный телефон"
          >
            Доп.телефон
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить электронную почту"
          >
            Email
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить социальную сеть вконтакте"
          >
            Vk
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить социальную сеть facebook"
          >
            Facebook
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить другие контактные данные"
          >
            Другое
          </button>
        </li>
      </ul>
    </div>
  );
}
