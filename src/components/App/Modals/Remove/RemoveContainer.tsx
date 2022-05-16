import React from "react";
import ReactDOM from "react-dom";

import { ModalRemoveComponent } from "./RemoveComponent";

export function ModalRemove() {
  const modalPortal = document.querySelector("#react-modal");

  if (!modalPortal) return null;

  return ReactDOM.createPortal(<ModalRemoveComponent />, modalPortal);
}
