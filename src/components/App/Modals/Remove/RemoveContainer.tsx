import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../store/delete/actions";

import { useNavigate } from "react-router-dom";

import { useSerachUser } from "../useSearchUser";

import { ModalRemoveComponent } from "./RemoveComponent";

export function ModalRemove() {
  const modalPortal = document.querySelector("#react-modal");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSerachUser();

  if (!modalPortal || !(modalPortal instanceof HTMLElement)) return null;

  useEffect(() => {
    function HandleClick(e: MouseEvent) {
      const target = e.target;

      if (!target || !(target instanceof HTMLElement)) return;

      if (
        !target.closest(".remove-modal") ||
        target.classList.contains("remove-modal__cross") ||
        target.classList.contains("remove-modal__cancel")
      ) {
        navigate(-1);
      }

      if (target.classList.contains("remove-modal__remove")) {
        // @ts-ignore
        dispatch(deleteUser(user));
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

  return ReactDOM.createPortal(<ModalRemoveComponent />, modalPortal);
}
