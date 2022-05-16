import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";

import "../../styles/normalize.common.scss";
import "../../styles/fonts.common.scss";
import "../../styles/styles.common.scss";
import styles from "./app.scss";

const Loader = React.lazy(() => import("./Layout/Clients/Loader"));
const Error = React.lazy(() => import("./Layout/Clients/Error"));
const Users = React.lazy(() => import("./Layout/Clients/Users"));
const ModalRemove = React.lazy(() => import("./Modals/Remove"));
const ModalCreate = React.lazy(() => import("./Modals/Create"));

export function AppComponent() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense>
                <Loader />
              </Suspense>
            }
          />
          {/* <Route
            path="users/"
            element={
              <Suspense>
                <Users />
              </Suspense>
            }
          /> */}
          <Route
            path="users/"
            element={
              <Suspense>
                <ModalCreate />
              </Suspense>
            }
          />
          <Route
            path="error"
            element={
              <Suspense>
                <Error />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
