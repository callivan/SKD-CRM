import React, { ReactNode } from "react";
import { NavigateFunction } from "react-router-dom";
import { Add, IAddBtnProps } from "../../Buttons/Add";
import { Filter } from "./Filter";

import styles from "./clients.scss";

interface IClientsComponentProps {
  navigate: NavigateFunction;
  children?: ReactNode;
}

export function ClientsComponent({
  navigate,
  children,
}: IClientsComponentProps) {
  const addUserBtnProps: IAddBtnProps = {
    className: styles["clients__add-btn"],
    dataAttr: "add-user-btn",
    event: { onClick: () => navigate("create") },
    ariaLabel: "Добавить клиента",
  };

  return (
    <>
      <h2 className={styles["clients__title"]}>Клиенты</h2>
      <div className={styles["clients__wrapper"]}>
        <Filter className="clients__filter" />
        {children}
      </div>
      <Add {...addUserBtnProps} />
    </>
  );
}
