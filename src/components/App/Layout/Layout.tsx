import React from "react";

import { Outlet } from "react-router-dom";

import { Clients } from "./Clients";
import { Header } from "./Header";

export function Layout() {

  return (
    <>
      <Header />
      <Clients>
        <Outlet />
      </Clients>
    </>
  );
}
