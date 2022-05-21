import { Reducer, useReducer } from "react";

import { useSerachUser } from "../useSearchUser";

const SET_NAME = "SET_NAME";
const SET_SURNAME = "SET_SURNAME";
const SET_PATRONYMIC = "SET_PATRONYMIC";

export type StateFormReducer = {
  name: string;
  surname: string;
  patronymic: string;
};

export type FormReducerActionType = {
  type: typeof SET_NAME | typeof SET_SURNAME | typeof SET_PATRONYMIC;
  data: StateFormReducer;
};

export function useFormReducer() {
  const user = useSerachUser();
  const initialState: StateFormReducer = {
    name: user ? user.name : "",
    surname: user ? user.surname : "",
    patronymic: user ? user.patronymic : "",
  };
  const reducer: Reducer<StateFormReducer, FormReducerActionType> = (
    state,
    action
  ) => {
    switch (action.type) {
      case SET_NAME:
        return { ...state, name: action.data.name };
      case SET_SURNAME:
        return { ...state, surname: action.data.surname };
      case SET_PATRONYMIC:
        return { ...state, patronymic: action.data.patronymic };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { formState: state, formDispatch: dispatch };
}
