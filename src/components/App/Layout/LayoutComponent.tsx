import React, { ReactNode } from "react";

import { Outlet } from "react-router-dom";
import { Client } from "./Client";
import { Header } from "./Header";

interface ILayuotComponentProps {
  children?: ReactNode;
}

export function LayoutComponent({ children }: ILayuotComponentProps) {
  return (
    <>
      <Header />
      <Client>
        {children}
        <Outlet />
      </Client>
    </>
  );
}
