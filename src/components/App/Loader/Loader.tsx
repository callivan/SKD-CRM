import React from "react";

import styles from "./loader.scss";

export function Loader({ type }: { type: "big" | "small" }) {
  return (
    <div className={[styles["loader"], type].join(" ")}>
      <svg className={styles["loader__icon"]} viewBox="0 0 24 24">
        <circle className={styles["loader__circle"]} cx="12" cy="12" r="11" />
      </svg>
    </div>
  );
}
