import React from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

import "../../styles/normalize.common.scss";
import "../../styles/fonts.common.scss";
import "../../styles/styles.common.scss";

const ModalCreate = React.lazy(() => import("./Modals/Create"));
const ModalRemove = React.lazy(() => import("./Modals/Remove"));
const Error = React.lazy(() => import("./Layout/Clients/Error"));

export function AppComponent({ loading }: { loading: boolean }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"create"} element={!loading && <ModalCreate />} />
          <Route path={"change/:id"} element={!loading && <ModalCreate />} />
          <Route path="remove/:id" element={!loading && <ModalRemove />} />
          <Route path={"error"} element={!loading && <Error />} />
          <Route path={"*"} element={!loading && <Error />} />
        </Route>
      </Routes>
    </>
  );
}
