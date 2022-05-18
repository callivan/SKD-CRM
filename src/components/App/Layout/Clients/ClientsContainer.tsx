import React, { ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import { ClientsComponent } from "./ClientsComponent";

interface IClientsProps {
  children?: ReactNode;
}

export const Clients = React.memo(function Clients({
  children,
}: IClientsProps) {
  const navigate = useNavigate();

  function HandleClick() {
    navigate("create");
  }

  return (
    <ClientsComponent
      children={children}
      addBtnEvent={{
        onClick: () => HandleClick(),
      }}
    />
  );
});
