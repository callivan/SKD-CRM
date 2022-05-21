import React, { ReactNode } from "react";

import { useNavigate } from "react-router-dom";

import { Add, IAddBtnProps } from "../../Buttons/Add";
import { Filter } from "./Filter";

import styles from "./client.scss";

interface IClientsComponentProps {
  children?: ReactNode;
}

export function Client({ children }: IClientsComponentProps) {
  const navigate = useNavigate();

  const addUserBtnProps: IAddBtnProps = {
    className: styles["clients__add-btn"],
    dataAttr: "add-user-btn",
    event: { onClick: () => navigate("create") },
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
