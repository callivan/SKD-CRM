import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useNavigate } from "react-router-dom";

import { ModalCreateComponent } from "./CreateComponent";

import { useSerachUser } from "../useSearchUser";
import { useFormReducer } from "./useFormReducer";
import { useContactsReducer } from "./useContactsReducer";

interface IModalCreateProps {
  modalType: "change" | "create";
}

export function ModalCreate({ modalType }: IModalCreateProps) {
  const modalPortal = document.querySelector("#react-modal");
  const navigate = useNavigate();
  const user = useSerachUser();
  const { formState, formDispatch } = useFormReducer();
  const { contactsState, contactsDispatch } = useContactsReducer();
  const isModalCreate = modalType === "create";

  if (!modalPortal || !(modalPortal instanceof HTMLElement)) return null;

  useEffect(() => {
    function HandleClick(e: MouseEvent) {
      const target = e.target;

      if (!target || !(target instanceof HTMLElement)) return;

      if (
        !target.closest(".create-modal") ||
        target.classList.contains("create-modal__cross") ||
        (isModalCreate && target.classList.contains("create-modal__btn-cancel"))
      ) {
        navigate(-1);
      }

      if (
        !isModalCreate &&
        target.classList.contains("create-modal__btn-cancel")
      ) {
        navigate(`/remove/${user?.id}`);
      }

      if (target.classList.contains("add-contacts__btn")) {
      }

      if (target.classList.contains("create-modal__btn-save")) {
        // @ts-ignore
        console.log(formState);
        console.log(contactsState);
        navigate(-1);
      }
    }

    document.body.classList.add("open");
    modalPortal.addEventListener("click", HandleClick);

    return () => {
      document.body.classList.remove("open");
      modalPortal.removeEventListener("click", HandleClick);
    };
  }, [formState]);

  return ReactDOM.createPortal(
    <ModalCreateComponent
      id={user?.id}
      formState={formState}
      formDispatch={formDispatch}
      contactsState={contactsState}
      contactsDispatch={contactsDispatch}
      modalType={modalType}
    />,
    modalPortal
  );
}
