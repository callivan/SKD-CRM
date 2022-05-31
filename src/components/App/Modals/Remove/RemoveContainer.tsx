import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSerachUser } from "../../../../hooks/useSearchUser";
import { ModalRemoveComponent } from "./RemoveComponent";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { request } from "../../../../store/request/actions";
import { userRemove } from "../../Layout/Clients/Users/animations/removeUser";
import { modalShow } from "../animations/show";
import { modalHide } from "../animations/hide";
import { StateType } from "../../../../store/rootTypes";
import { UsersActionsTypes } from "../../../../store/request/types";

export function ModalRemove() {
  const modalPortal = document.querySelector("#react-modal");
  const dispatch =
    useDispatch<ThunkDispatch<StateType, any, UsersActionsTypes>>();
  const navigate = useNavigate();
  const [showLoader, setShowLoader] = useState(false);
  const user = useSerachUser();

  if (!modalPortal || !(modalPortal instanceof HTMLElement)) return null;

  useEffect(() => {
    //Анимация появления модального окна
    modalShow(document.querySelector(".remove-modal"));

    function HandleClick(e: MouseEvent) {
      const target = e.target;

      if (!target || !(target instanceof HTMLElement)) return;

      if (
        !target.closest(".remove-modal") ||
        target.classList.contains("remove-modal__cross") ||
        target.classList.contains("remove-modal__cancel")
      ) {
        //Анимация удаления модального окна
        const removeModal = async () => {
          await modalHide(document.querySelector(".remove-modal"));
          navigate(-1);
        };

        removeModal();
      }

      if (target.classList.contains("remove-modal__remove")) {
        if (!user) return;

        const removeModal = async () => {
          setShowLoader(true);
          const requestCompleted = await dispatch(
            request(`http://localhost:3001/users/${user.id}`, "DELETE", user)
          );

          if (requestCompleted) {
            setShowLoader(false);
            await userRemove(user.id);
            await modalHide(document.querySelector(".remove-modal"));
            navigate("/", { replace: true });
          }
        };

        removeModal();
      }
    }

    modalPortal.addEventListener("click", HandleClick);
    document.body.classList.add("open");
    return () => {
      modalPortal.removeEventListener("click", HandleClick);
      document.body.classList.remove("open");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={"remove-modal"}>
      <ModalRemoveComponent showLoader={showLoader} />
    </div>,
    modalPortal
  );
}
