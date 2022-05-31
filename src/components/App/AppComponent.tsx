import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

const Error = React.lazy(() => import("./Modals/Error"));
const Create = React.lazy(() => import("./Modals/Create"));
const Remove = React.lazy(() => import("./Modals/Remove"));

import "../../styles/normalize.common.scss";
import "../../styles/fonts.common.scss";
import "../../styles/styles.common.scss";

export function AppComponent({ loading }: { loading: boolean }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="create" element={!loading && <Create />} />
          <Route path="change/:id" element={!loading && <Create />} />
          <Route path="remove/:id" element={!loading && <Remove />} />
          <Route path="error" element={!loading && <Error />} />
          <Route path="*" element={!loading && <Error />} />
        </Route>
      </Routes>
    </>
  );
}
