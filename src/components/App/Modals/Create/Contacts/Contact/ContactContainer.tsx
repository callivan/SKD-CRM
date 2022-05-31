import React, { useEffect, useState } from "react";
import {
  CHANGE_CONTACT_DATA,
  ContactActionType,
  DELETE_CONTACT,
  FormActionType,
} from "../../../../../../hooks/useUserReducer";
import { SocialType } from "../../../../../../store/request/types";
import { contactHide } from "./animations/hide";
import { contactShow } from "./animations/show";
import { ContactComponent } from "./ContactComponent";

interface IContactProps {
  className?: string;
  contact: SocialType;
  dispatch: React.Dispatch<FormActionType | ContactActionType>;
}

export function Contact({ className, contact, dispatch }: IContactProps) {
  const [selectOpen, setSelectOpen] = useState(false);

  function HandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: CHANGE_CONTACT_DATA,
      payload: { ...contact, data: e.currentTarget.value.trim() },
    });
  }

  async function HandleClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    await contactHide(e.currentTarget.parentElement);

    dispatch({
      type: DELETE_CONTACT,
      payload: { ...contact },
    });
  }

  useEffect(() => {
    //Фнимация появления блока Contact
    contactShow();
  }, []);

  return (
    <div
      className={["contact", className].join(" ")}
      style={{
        zIndex: selectOpen
          ? setTimeout(() => {
              10;
            }, 500)
          : setTimeout(() => {
              0;
            }, 500),
      }}
    >
      <ContactComponent
        contact={contact}
        dispatch={dispatch}
        onClick={HandleClick}
        onChange={HandleChange}
        selectOpen={selectOpen}
        setSelect={setSelectOpen}
      />
    </div>
  );
}
