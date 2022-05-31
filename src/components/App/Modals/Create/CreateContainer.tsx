import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalCreateComponent } from "./CreateComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useSerachUser } from "../../../../hooks/useSearchUser";
import { request } from "../../../../store/request/actions";
import { modalShow } from "../animations/show";
import { modalHide } from "../animations/hide";
import {
  ContactActionType,
  FormActionType,
  useUserReducer,
} from "../../../../hooks/useUserReducer";
import {
  UserDataType,
  UsersActionsTypes,
} from "../../../../store/request/types";
import {
  useValidationReducer,
  ValidationActionsType,
} from "../../../../hooks/useValidationReducer";
import { StateType } from "../../../../store/rootTypes";

export const UserContext = React.createContext<{
  userState: UserDataType;
  userDispatch: React.Dispatch<FormActionType | ContactActionType>;
  errorState: Array<string> | null;
  errorDispatch: React.Dispatch<ValidationActionsType>;
} | null>(null);

export function ModalCreate() {
  const modalPortal = document.querySelector("#react-modal");
  if (!modalPortal || !(modalPortal instanceof HTMLElement)) return null;

  const user = useSerachUser();
  //Стэет для сохранения нового/измененного пользователя
  const { userState, userDispatch } = useUserReducer();
  //Стэйт для сохранения статуса валидации формы (без валидации контактов)
  const { errorState, errorDispatch } = useValidationReducer();
  const [showLoader, setShowLoader] = useState(false);
  const dispatch =
    useDispatch<ThunkDispatch<StateType, any, UsersActionsTypes>>();
  const navigate = useNavigate();

  useEffect(() => {
    //Анимация появления модального окна
    modalShow(document.querySelector(".create-modal"));

    function HandleClick(e: MouseEvent) {
      const target = e.target;

      if (!target || !(target instanceof HTMLElement)) return;

      if (
        !target.closest(".create-modal") ||
        target.classList.contains("create-modal__cross") ||
        (target.classList.contains("create-modal__btn-cancel") && !user)
      ) {
        //Анимация удаления модального окна
        const removeModal = async () => {
          await modalHide(document.querySelector(".create-modal"));
          navigate(-1);
        };

        removeModal();
      }

      if (target.classList.contains("create-modal__btn-cancel") && user) {
        //Анимация удаления модального окна
        const removeModal = async () => {
          await modalHide(document.querySelector(".create-modal"));
          navigate(`/remove/${user.id}`);
        };

        removeModal();
      }

      if (target.classList.contains("create-modal__btn-save")) {
        //Анимация удаления модального окна
        const removeModal = async () => {
          setShowLoader(true);
          const requestCompleted = await dispatch(
            request(
              `http://localhost:3001/users${user ? `/${user.id}` : ""}`,
              user ? "PATCH" : "POST",
              {
                ...userState,
                social: userState.social
                  ? userState.social.filter((contact) => contact.data.length)
                  : null,
              }
            )
          );

          if (requestCompleted) {
            setShowLoader(false);
            await modalHide(document.querySelector(".create-modal"));
            navigate("/", { replace: true });
          }
        };

        removeModal();
      }
    }

    modalPortal.addEventListener("click", HandleClick);
    document.body.classList.add("open");

    return () => {
      modalPortal.removeEventListener("click", HandleClick);
      document.body.classList.remove("open");
    };
  }, [userState]);

  return ReactDOM.createPortal(
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
        errorState: errorState,
        errorDispatch: errorDispatch,
      }}
    >
      <ModalCreateComponent
        id={user ? user.id : null}
        errorState={errorState}
        showLoader={showLoader}
      />
    </UserContext.Provider>,
    modalPortal
  );
}
