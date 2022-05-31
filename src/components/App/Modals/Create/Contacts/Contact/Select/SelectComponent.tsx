import React from "react";
import styles from "./select.scss";

interface ISelecComponentProps {
  isOpen: boolean;
  activeField: string;
}

export function SelectComponent({ isOpen, activeField }: ISelecComponentProps) {
  return (
    <>
      <button
        className={styles["select__btn"]}
        aria-label="Развернуть список для выбора контакта"
      >
        <span className={styles["select__btn-text"]}>{activeField}</span>
        <span className={styles["select__btn-arrow"]}></span>
      </button>
      <ul
        className={styles["select__list"]}
      >
        <li className={[styles["select__item"], "active"].join(" ")}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить телефон"
            tabIndex={isOpen ? 0 : -1}
            data-attr="phone"
          >
            Телефон
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить дополнительный телефон"
            tabIndex={isOpen ? 0 : -1}
            data-attr="secondPhone"
          >
            Доп.телефон
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить электронную почту"
            tabIndex={isOpen ? 0 : -1}
            data-attr="email"
          >
            Email
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить социальную сеть вконтакте"
            tabIndex={isOpen ? 0 : -1}
            data-attr="vk"
          >
            Vk
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить социальную сеть facebook"
            tabIndex={isOpen ? 0 : -1}
            data-attr="fb"
          >
            Facebook
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить другие контактные данные"
            tabIndex={isOpen ? 0 : -1}
            data-attr="other"
          >
            Другое
          </button>
        </li>
      </ul>
    </>
  );
}
