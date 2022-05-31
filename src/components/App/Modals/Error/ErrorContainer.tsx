import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useSelector } from "react-redux";
import { StateType } from "../../../../store/rootTypes";

import { useLocation, useNavigate } from "react-router-dom";

import { ErrorComponent } from "./ErrorComponent";
import { modalShow } from "../animations/show";
import { modalHide } from "../animations/hide";

export function Error() {
  const modalPortal = document.querySelector("#react-modal");
  const error = useSelector<
    StateType,
    { status: number | null; message: string | null }
  >((state) => state.error);

  const { state } = useLocation();
  const navigate = useNavigate();

  let message = "Что-то пошло не так...";
  let status = null;

  if (error.status && error.message) {
    message = error.message;
    status = error.status;
  } else if (state && typeof state === "string") {
    message = state;
  }

  if (!modalPortal) return null;

  useEffect(() => {
    //Анимация появления блока Error
    modalShow(document.querySelector(".error-modal"));

    document.body.classList.add("open");

    return () => {
      document.body.classList.remove("open");
    };
  }, []);

  function HandleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target;

    if (
      target instanceof HTMLButtonElement &&
      target.classList.contains("error-modal__btn")
    ) {
      const removeModal = async () => {
        //Анимация удаления блока Error
        await modalHide(e.currentTarget);
        navigate("/", { replace: true });
      };

      removeModal();
    }
  }

  return ReactDOM.createPortal(
    <div className={"error-modal"} onClick={(e) => HandleClick(e)}>
      <ErrorComponent message={message} status={status} />
    </div>,
    modalPortal
  );
}
