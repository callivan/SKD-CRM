import React from "react";

import styles from "./search.scss";

interface ISearchComponentProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

export function SearchComponent({
  value,
  setValue,
  className,
}: ISearchComponentProps) {
  return (
    <input
      className={[styles["search"], className].join(" ")}
      type="text"
      placeholder="Введите запрос"
      aria-label="Поиск клиента"
      value={value}
      onChange={(e) => {
        setValue(e.currentTarget.value);
      }}
    />
  );
}
