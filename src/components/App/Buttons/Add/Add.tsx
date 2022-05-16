import React, { ReactNode } from "react";

import styles from "./add.scss";

export interface IAddBtnProps {
  event?: React.DOMAttributes<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  dataAttr?: string;
  className?: string;
  children?: ReactNode | string;
  ariaLabel?: string;
  disabled?: boolean;
}

export function Add({
  event,
  type,
  dataAttr,
  className,
  children,
  ariaLabel,
  disabled,
}: IAddBtnProps) {
  return (
    <button
      className={[styles["add-btn"], className].join(" ")}
      type={type}
      data-attr={dataAttr}
      aria-label={ariaLabel}
      disabled={disabled}
      {...event}
    >
      {children ? (
        children
      ) : (
        <>
          <span className={styles["add-btn__icon"]}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 23 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z"
                fill="#9873FF"
              />
            </svg>
          </span>
          <span className={styles["add-btn__text"]}>Добавить клиента</span>
        </>
      )}
    </button>
  );
}
