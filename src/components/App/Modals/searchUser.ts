import { useParams, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { StateType } from "../../../store/rootTypes";
import { UserDataType } from "../../../store/users/types";
import { useEffect } from "react";

export function useSerachUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useSelector<StateType, Array<UserDataType> | null>(
    (state) => state.users.data
  );

  if (!users || !id) return null;

  const findUser = users.find((user) => user.id === Number(id));

  useEffect(() => {
    if (!findUser) {
      navigate("/error");
    }
  }, []);

  return findUser ? findUser : null;
}
