import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { StateType } from "../../store/rootTypes";
import { UsersActionType } from "../../store/users/types";

import { useNavigate } from "react-router-dom";

import { AppComponent } from "./AppComponent";

import { loaderHide } from "./Layout/Clients/Loader/animations/hide";

export function App() {
  const navigate = useNavigate();
  const data = useSelector<StateType, UsersActionType>((state) => state.users);

  useEffect(() => {
    
    if (!data.loading && !data.error) {
      const loaderAnimation = async () => {
        await loaderHide();
        navigate("users");
      };

      loaderAnimation();
    }

    if (data.error) {
      navigate("error");
    }
  }, [data]);

  return <AppComponent />;
}
