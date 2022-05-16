import React, { useLayoutEffect } from "react";

import { crossHide } from "./animation/hide";
import { crossShow } from "./animation/show";

import styles from "./cross.scss";

interface ICrossProps {
  className?: string;
  dataAttr?: string;
  event?: React.DOMAttributes<HTMLButtonElement>;
  ariaLabel?: string;
}

export function Cross({ className, dataAttr, event, ariaLabel }: ICrossProps) {
  useLayoutEffect(() => {
    crossShow();

    return () => {
      crossHide();
    };
  }, []);

  return (
    <button
      className={[styles["cross-btn"], className].join(" ")}
      data-attr={dataAttr}
      aria-label={ariaLabel}
      {...event}
    >
      <span></span>
      <span></span>
    </button>
  );
}
