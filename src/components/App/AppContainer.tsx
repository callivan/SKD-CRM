import React, { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../store/rootTypes";
import { AppComponent } from "./AppComponent";

export function App() {
  const loading = useSelector<StateType, boolean>((state) => state.loading);

  useLayoutEffect(() => {
    loading
      ? document.body.classList.add("disabled")
      : document.body.classList.remove("disabled");
  }, [loading]);

  return (
      <AppComponent loading={loading} />
  );
}
