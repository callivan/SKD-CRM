import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import { useSelector } from "react-redux";
import { StateType } from "../../../../../store/rootTypes";

import { useNavigate } from "react-router-dom";

import { ErrorComponent } from "./ErrorComponent";

export function Error() {
  const modalPortal = document.querySelector("#react-modal");
  const error = useSelector<StateType, string | null>(
    (state) => state.users.error
  );
  const message = error || "Что-то пошло не так...";
  const navigate = useNavigate();

  if (!modalPortal) return null;

  useEffect(() => {
    console.log("error");
    const errorBtn = document.querySelector(".error__btn");

    if (!errorBtn || !(errorBtn instanceof HTMLElement)) return;

    function errorCloseHandle() {
      navigate("/", { replace: true });
    }

    document.body.classList.add("open");
    errorBtn.addEventListener("click", errorCloseHandle);

    return () => {
      document.body.classList.remove("open");
      errorBtn.removeEventListener("click", errorCloseHandle);
    };
  }, []);

  return ReactDOM.createPortal(
    <ErrorComponent message={message} />,
    modalPortal
  );
}
