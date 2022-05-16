import React, { ReactNode } from "react";

import { Add, IAddBtnProps } from "../../Buttons/Add";
import { Filter } from "./Filter";

import styles from "./clients.scss";

interface IClientsComponentProps {
  addBtnEvent?: React.DOMAttributes<HTMLButtonElement>;
  children?: ReactNode;
}

export function ClientsComponent({
  addBtnEvent,
  children,
}: IClientsComponentProps) {
  const addUserBtnProps: IAddBtnProps = {
    className: styles["clients__add-btn"],
    dataAttr: "add-user-btn",
    event: addBtnEvent,
    ariaLabel: "Добавить клиента",
    disabled: false,
  };

  return (
    <section className={styles["clients"]}>
      <h2 className={styles["clients__title"]}>Клиенты</h2>
      <div className={styles["clients__wrapper"]}>
        <Filter className="clients__filter" />
        {children}
      </div>
      <Add {...addUserBtnProps} />
    </section>
  );
}
