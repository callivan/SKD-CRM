import React, { useState } from "react";

import { SelectComponent } from "./SelectComponent";

interface ISelectProps {
  className?: string;
}

export function Select({ className }: ISelectProps) {
  const [isOpen, setOpen] = useState(false);
  const [activeField, setActiveField] = useState("Телефон");

  function HandleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target;

    if (!(target instanceof HTMLElement)) return;

    if (target.classList.contains("select__btn")) {
      setOpen(!isOpen);
    }

    if (target.classList.contains("select__item-btn")) {
      const text = target.textContent;

      if (!text) return;

      setActiveField(text);
      setOpen(false);
      addClassActive(target, e.currentTarget);
    }
  }

  return (
    <SelectComponent
      isOpen={isOpen}
      onClick={HandleClick}
      activeField={activeField}
      className={className}
    />
  );
}

function addClassActive(target: HTMLElement, parent: HTMLElement) {
  const items = parent.querySelectorAll(".select__item");

  items.forEach((item) => {
    const child = item.firstChild;

    if (!child) return;

    if (child.textContent === target.textContent) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
