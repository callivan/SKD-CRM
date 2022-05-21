import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { StateType } from "../../store/rootTypes";

import { AppComponent } from "./AppComponent";

export function App() {
  const loading = useSelector<StateType, boolean>(
    (state) => state.loading
  );

  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    const inputs = document.querySelectorAll("input");
    const links = document.querySelectorAll("a");

    if (loading) {
      document.body.classList.add("loading");
      buttons.forEach((button) => button.setAttribute("disabled", ""));
      inputs.forEach((input) => input.setAttribute("disabled", ""));
      links.forEach((link) => link.setAttribute("data-attr-disabled", ""));
    } else {
      document.body.classList.remove("loading");
      buttons.forEach((button) => button.removeAttribute("disabled"));
      inputs.forEach((input) => input.removeAttribute("disabled"));
      links.forEach((link) => link.removeAttribute("data-attr-disabled"));
    }
  }, [loading]);

  return <AppComponent loading={loading} />;
}
