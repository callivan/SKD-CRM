import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../../../store/rootTypes";
import { useNavigate } from "react-router-dom";
import { ClientsComponent } from "./ClientsComponent";
import { clientsShow } from "./animations/show";

import styles from "./clients.scss";

const Loader = React.lazy(() => import("../../Loader"));
const Users = React.lazy(() => import("./Users"));

export function Clients() {
  const loading = useSelector<StateType, boolean>((state) => state.loading);
  const error = useSelector<
    StateType,
    { status: number | null; message: string | null }
  >((state) => state.error);
  const navigate = useNavigate();

  useEffect(() => {
    //Анимация появления блока Clients
    clientsShow();

    if (error.status && error.message) {
      navigate("/error");
    }
  }, [loading]);

  return (
    <section className={styles["clients"]}>
      <ClientsComponent navigate={navigate}>
        {loading && <Loader type="big" />}
        {!loading && !error.message && !error.status && <Users />}
      </ClientsComponent>
    </section>
  );
}
