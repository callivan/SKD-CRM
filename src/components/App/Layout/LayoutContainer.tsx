import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { StateType } from "../../../store/rootTypes";
import { UsersActionType } from "../../../store/users/types";

import { LayoutComponent } from "./LayoutComponent";

const Loader = React.lazy(() => import("./Clients/Loader"));
const Users = React.lazy(() => import("./Clients/Users"));

export function Layout() {
  const data = useSelector<StateType, UsersActionType>((state) => state.users);

  useEffect(() => {}, [data]);

  return (
    <LayoutComponent>
      {data.loading && <Loader />}
      {!data.loading && data.data && !data.error && <Users users={data.data} />}
    </LayoutComponent>
  );
}
