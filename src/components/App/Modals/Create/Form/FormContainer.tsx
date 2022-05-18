import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { activeUser } from "../../../../../store/user/actions";
import { UserDataType } from "../../../../../store/users/types";

import { FormComponent } from "./FormComponent";

interface IFormProps {
  user: UserDataType | null;
  className?: string;
}

export function Form({ className, user }: IFormProps) {
  const dispatch = useDispatch();
  const [name, setName] = useState(user?.name || "");
  const [surname, setSurname] = useState(user?.surname || "");
  const [patronymic, setPatronymic] = useState(user?.patronymic || "");

  useEffect(() => {
    const changedUser = { ...user, name, surname, patronymic };
    dispatch(activeUser(changedUser));
  }, [name, surname, patronymic]);

  return (
    <FormComponent
      className={className}
      state={{ name, surname, patronymic }}
      onChanges={{
        name: setName,
        surname: setSurname,
        patronymic: setPatronymic,
      }}
    />
  );
}
