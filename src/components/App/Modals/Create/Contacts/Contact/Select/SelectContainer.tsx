import React, { useEffect, useRef, useState } from "react";
import { SocialType } from "../../../../../../../store/request/types";
import { SelectComponent } from "./SelectComponent";
import { addClassActive } from "./functions/addClassActive";
import { selectActiveField } from "./functions/selectActiveField";
import { selectShow } from "./animations/show";
import { selectHide } from "./animations/hide";
import {
  CHANGE_CONTACT_TYPE,
  ContactActionType,
  FormActionType,
} from "../../../../../../../hooks/useUserReducer";

interface ISelectProps {
  contact: SocialType;
  dispatch: React.Dispatch<FormActionType | ContactActionType>;
  selectOpen: boolean;
  setSelect: React.Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

export function Select({
  selectOpen,
  setSelect,
  contact,
  dispatch,
  className,
}: ISelectProps) {
  const targetRef: React.MutableRefObject<HTMLDivElement | null> = useRef(null);
  const [activeField, setActiveField] = useState(
    selectActiveField(contact.type)
  );

  function HandleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target;

    if (!(target instanceof HTMLElement)) return;

    if (target.classList.contains("select__btn")) {
      setSelect(!selectOpen);
    }

    if (target.classList.contains("select__item-btn")) {
      const text = target.textContent;

      if (!text || !target.dataset.attr) return;

      dispatch({
        type: CHANGE_CONTACT_TYPE,
        payload: { ...contact, type: target.dataset.attr },
      });

      setActiveField(text);
      setSelect(false);
      addClassActive(target, e.currentTarget);
    }
  }

  useEffect(() => {
    if (targetRef.current) {
      const list = targetRef.current.querySelector(".select__list");
      const items = targetRef.current.querySelectorAll(".select__item");
      const arrow = targetRef.current.querySelector(".select__btn-arrow");

      selectOpen
        ? selectShow(list, items, arrow)
        : selectHide(list, items, arrow);
    }
  }, [selectOpen]);

  return (
    <div
      className={["select", className].join(" ")}
      ref={targetRef}
      onClick={(e) => HandleClick(e)}
    >
      <SelectComponent isOpen={selectOpen} activeField={activeField} />
    </div>
  );
}
