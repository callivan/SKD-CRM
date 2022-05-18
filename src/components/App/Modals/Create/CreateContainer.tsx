import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useDispatch } from "react-redux";
import { patchUser } from "../../../../store/users/actions";

import { useNavigate } from "react-router-dom";

import { useSerachUser } from "../searchUser";

import { ModalCreateComponent } from "./CreateComponent";
import { activeUser } from "../../../../store/user/actions";

export function ModalCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalPortal = document.querySelector("#react-modal");
  const user = useSerachUser();

  if (!modalPortal || !(modalPortal instanceof HTMLElement)) return null;

  useEffect(() => {
    if (user) {
      dispatch(activeUser(user));
    }

    function HandleClick(e: MouseEvent) {
      const target = e.target;

      if (!target || !(target instanceof HTMLElement)) return;

      if (
        !target.closest(".create-modal") ||
        target.classList.contains("create-modal__cross") ||
        target.classList.contains("create-modal__btn-remove")
      ) {
        navigate(-1);
      }

      if (target.classList.contains("create-modal__btn-save")) {
        console.log(user)
        // @ts-ignore
        dispatch(patchUser(user));
        navigate(-1);
      }
    }

    document.body.classList.add("open");
    modalPortal.addEventListener("click", HandleClick);

    return () => {
      document.body.classList.remove("open");
      modalPortal.removeEventListener("click", HandleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <ModalCreateComponent user={user ? user : null} />,
    modalPortal
  );
}
