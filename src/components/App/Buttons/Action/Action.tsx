import React, { ReactNode } from "react";

import styles from "./action.scss";

interface IActionProps {
  className?: string;
  children?: ReactNode | string;
  ariaLabel?: string;
  disabled?: boolean;
  event?: React.DOMAttributes<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  dataAttr?: string;
}

export function Action({
  className,
  children,
  ariaLabel,
  disabled = false,
  event,
  type,
  dataAttr,
}: IActionProps) {
  return (
    <button
      className={[styles["action-btn"], className].join(" ")}
      aria-label={ariaLabel}
      disabled={disabled}
      type={type}
      data-attr={dataAttr}
      {...event}
    >
      {children}
    </button>
  );
}
