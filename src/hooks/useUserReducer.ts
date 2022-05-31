import { Reducer, useReducer } from "react";
import { useSelector } from "react-redux";
import { generationId } from "../components/App/Modals/Create/functions/generationId";
import { setDateTime } from "../components/App/Modals/Create/functions/setDate";
import { UserDataType } from "../store/request/types";
import { StateType } from "../store/rootTypes";
import { useSerachUser } from "./useSearchUser";

export const SET_NAME = "SET_NAME";
export const SET_SURNAME = "SET_SURNAME";
export const SET_PATRONYMIC = "SET_PATRONYMIC";
export const SET_CONTACT = "SET_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const CHANGE_CONTACT_DATA = "CHANGE_CONTACT_DATA";
export const CHANGE_CONTACT_TYPE = "CHANGE_CONTACT_TYPE";

export type FormActionType = {
  type: typeof SET_NAME | typeof SET_SURNAME | typeof SET_PATRONYMIC;
  payload: {
    name: string;
    surname: string;
    patronymic: string;
  };
};

export type ContactActionType = {
  type:
    | typeof SET_CONTACT
    | typeof DELETE_CONTACT
    | typeof CHANGE_CONTACT_DATA
    | typeof CHANGE_CONTACT_TYPE;
  payload: {
    id: number;
    type: "phone" | "secondPhone" | "vk" | "fb" | "email" | string;
    data: string;
  };
};

//Функция редьюсер для создания или редактирования пользователя
export function useUserReducer() {
  const user = useSerachUser();
  const users = useSelector<StateType, Array<UserDataType> | null>(
    (state) => state.data
  );
  const initialState: UserDataType = {
    id: user
      ? user.id
      : users
      ? generationId(users.map((user) => user.id))
      : generationId(null),
    name: user ? user.name : "",
    surname: user ? user.surname : "",
    patronymic: user ? user.patronymic : "",
    social: user ? user.social : null,
    created: user ? user.created : { date: "", time: "" },
    changed: { date: "", time: "" },
  };
  const reducer: Reducer<UserDataType, FormActionType | ContactActionType> = (
    state,
    action
  ) => {
    switch (action.type) {
      case SET_NAME:
        return {
          ...state,
          name: action.payload.name,
          created: user ? user.created : setDateTime(),
          changed: setDateTime(),
        };
      case SET_SURNAME:
        return {
          ...state,
          surname: action.payload.surname,
          created: user ? user.created : setDateTime(),
          changed: setDateTime(),
        };
      case SET_PATRONYMIC:
        return {
          ...state,
          patronymic: action.payload.patronymic,
          created: user ? user.created : setDateTime(),
          changed: setDateTime(),
        };
      case SET_CONTACT:
        if (!state.social) {
          return {
            ...state,
            social: [action.payload],
            created: user ? user.created : setDateTime(),
            changed: setDateTime(),
          };
        } else {
          return {
            ...state,
            social: [...state.social, action.payload],
            created: user ? user.created : setDateTime(),
            changed: setDateTime(),
          };
        }
      case DELETE_CONTACT:
        if (state.social) {
          const index = state.social.findIndex(
            (contact) => contact.id === action.payload.id
          );

          if (index === -1) return state;

          const nextState = {
            ...state,
            social: [...state.social],
            created: user ? user.created : setDateTime(),
            changed: setDateTime(),
          };
          nextState.social.splice(index, 1);
          return nextState;
        }
      case CHANGE_CONTACT_DATA:
        if (state.social) {
          const index = state.social.findIndex(
            (contact) => contact.id === action.payload.id
          );

          if (index === -1) return state;

          const nextState = {
            ...state,
            social: [...state.social],
            created: user ? user.created : setDateTime(),
            changed: setDateTime(),
          };
          nextState.social.splice(index, 1, action.payload);
          return nextState;
        }
      case CHANGE_CONTACT_TYPE:
        if (state.social) {
          const index = state.social.findIndex(
            (contact) => contact.id === action.payload.id
          );

          if (index === -1) return state;
          const nextState = {
            ...state,
            social: [...state.social],
            created: user ? user.created : setDateTime(),
            changed: setDateTime(),
          };
          nextState.social.splice(index, 1, action.payload);
          return nextState;
        }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { userState: state, userDispatch: dispatch };
}
