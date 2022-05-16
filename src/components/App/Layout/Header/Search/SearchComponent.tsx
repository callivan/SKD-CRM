import React from "react";

import styles from "./search.scss";

interface ISearchComponentProps {
  className?: string;
}

export function SearchComponent({ className }: ISearchComponentProps) {
  return (
    <input
      className={[styles["search"], className].join(" ")}
      type="text"
      placeholder="Введите запрос"
      aria-label="Поиск клиента"
    />
  );
}
