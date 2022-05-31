import React, { useContext, useEffect, useRef } from "react";
import {
  SET_SURNAME,
  SET_NAME,
  SET_PATRONYMIC,
} from "../../../../../hooks/useUserReducer";
import {
  DELETE_ERROR,
  SET_ERROR,
} from "../../../../../hooks/useValidationReducer";
import { UserContext } from "../CreateContainer";
import { FormComponent } from "./FormComonent";
import { validateForm } from "./validate/validateForm";

interface IFormProps {
  className?: string;
}

export function Form({ className }: IFormProps) {
  const userContext = useContext(UserContext);
  const formRef = useRef<HTMLFormElement | null>(null);

  if (!userContext) return null;

  const { userState, userDispatch, errorDispatch } = userContext;

  function HandleChange(e: React.FormEvent<HTMLFormElement>) {
    const target = e.target;

    if (!(target instanceof HTMLInputElement)) return;

    if (target.name === "surname") {
      userDispatch({
        type: SET_SURNAME,
        payload: { ...userState, surname: target.value.trim() },
      });
      const error = validateForm(target);
      error
        ? errorDispatch({
            type: SET_ERROR,
            error,
          })
        : errorDispatch({
            type: DELETE_ERROR,
          });
    }

    if (target.name === "name") {
      userDispatch({
        type: SET_NAME,
        payload: { ...userState, name: target.value.trim() },
      });
      const error = validateForm(target);
      error
        ? errorDispatch({
            type: SET_ERROR,
            error,
          })
        : errorDispatch({
            type: DELETE_ERROR,
          });
    }

    if (target.name === "patronymic") {
      userDispatch({
        type: SET_PATRONYMIC,
        payload: { ...userState, patronymic: target.value.trim() },
      });
      const error = validateForm(target);
      error
        ? errorDispatch({
            type: SET_ERROR,
            error,
          })
        : errorDispatch({
            type: DELETE_ERROR,
          });
    }
  }

  useEffect(() => {
    if (!formRef.current) return;

    const name = formRef.current.elements.namedItem("name") as HTMLInputElement;
    const surname = formRef.current.elements.namedItem(
      "surname"
    ) as HTMLInputElement;
    const patronymic = formRef.current.elements.namedItem(
      "patronymic"
    ) as HTMLInputElement;

    [name.value, surname.value, patronymic.value] = [
      userState.name,
      userState.surname,
      userState.patronymic,
    ];

    const errorName = validateForm(name);
    const errorSurname = validateForm(surname);
    const errorPatronymic = validateForm(patronymic);

    if (errorName || errorSurname || errorPatronymic) {
      let error = errorName || errorSurname || errorPatronymic;

      error
        ? errorDispatch({
            type: SET_ERROR,
            error,
          })
        : errorDispatch({ type: DELETE_ERROR });
    }
  }, [userState]);

  return (
    <form
      ref={formRef}
      autoComplete="off"
      className={["form", className].join(" ")}
      onChange={(e) => HandleChange(e)}
    >
      <FormComponent />
    </form>
  );
}
