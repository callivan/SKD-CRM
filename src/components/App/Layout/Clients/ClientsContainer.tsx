import React, { ReactNode, useLayoutEffect } from "react";

import { clientsShow } from "./animation/show";

import { ClientsComponent } from "./ClientsComponent";

interface IClientsProps {
  children?: ReactNode;
}

export function Clients({ children }: IClientsProps) {
  useLayoutEffect(() => {
    clientsShow();
  }, []);

  return <ClientsComponent children={children} />;
}
