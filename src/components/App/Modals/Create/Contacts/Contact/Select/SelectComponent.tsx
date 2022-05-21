import React from "react";

import styles from "./select.scss";

interface ISelecComponentProps {
  isOpen: boolean;
  activeField: string;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

export function SelectComponent({
  isOpen,
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
            tabIndex={isOpen ? 0 : -1}
          >
            Телефон
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить дополнительный телефон"
            tabIndex={isOpen ? 0 : -1}
          >
            Доп.телефон
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить электронную почту"
            tabIndex={isOpen ? 0 : -1}
          >
            Email
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить социальную сеть вконтакте"
            tabIndex={isOpen ? 0 : -1}
          >
            Vk
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить социальную сеть facebook"
            tabIndex={isOpen ? 0 : -1}
          >
            Facebook
          </button>
        </li>
        <li className={styles["select__item"]}>
          <button
            className={styles["select__item-btn"]}
            aria-label="Добавить другие контактные данные"
            tabIndex={isOpen ? 0 : -1}
          >
            Другое
          </button>
        </li>
      </ul>
    </div>
  );
}
