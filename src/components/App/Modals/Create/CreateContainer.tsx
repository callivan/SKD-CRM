import React from "react";
import ReactDOM from "react-dom";

import { ModalCreateComponent } from "./CreateComponent";

export function ModalCreate() {
  const modalPortal = document.querySelector("#react-modal");

  if (!modalPortal) return null;

  return ReactDOM.createPortal(
    <ModalCreateComponent modalType="create" />,
    modalPortal
  );
}
