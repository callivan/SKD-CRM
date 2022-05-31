import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./store/rootReducer";
import { request } from "./store/request/actions";
import { App } from "./components/App";

window.addEventListener("load", () => {
  const wrapper = document.querySelector("#react-root");
  const store = configureStore({
    reducer: rootReducer,
  });

  if (!wrapper) return null;

  store.dispatch(request("http://localhost:3001/users"));

  const root = ReactDOM.createRoot(wrapper);
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Suspense>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
});
