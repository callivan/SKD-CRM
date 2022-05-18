import React, { ReactNode } from "react";

import { Outlet } from "react-router-dom";

import { Clients } from "./Clients";
import { Header } from "./Header";

interface ILayuotComponentProps {
  children?: ReactNode;
}

export function LayoutComponent({ children }: ILayuotComponentProps) {
  return (
    <>
      <Header />
      <Clients>
        {children}
        <Outlet />
      </Clients>
    </>
  );
}
