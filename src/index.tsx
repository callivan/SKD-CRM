import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { rootReducer } from "./store/rootReducer";
import { getUsers } from "./store/users/actions";

import { App } from "./components/App";

window.addEventListener("load", () => {
  const wrapper = document.querySelector("#react-root");
  const store = configureStore({
    reducer: rootReducer,
  });

  if (!wrapper) return null;

  setTimeout(() => {
    store.dispatch(getUsers());
  }, 5000);

  const root = ReactDOM.createRoot(wrapper);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
});