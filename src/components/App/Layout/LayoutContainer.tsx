import React from "react";

import { useSelector } from "react-redux";
import { StateType } from "../../../store/rootTypes";
import { UsersActionType } from "../../../store/get/types";

import { LayoutComponent } from "./LayoutComponent";

const Loader = React.lazy(() => import("./Client/Loader"));
const Users = React.lazy(() => import("./Client/Users"));

export function Layout() {
  const data = useSelector<StateType, UsersActionType>((state) => state);

  return (
    <LayoutComponent>
      {data.loading && <Loader />}
      {!data.loading && data.data && !data.error && <Users />}
    </LayoutComponent>
  );
}
