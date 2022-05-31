import { Reducer, useReducer } from "react";

export const SET_ERROR = "SET_ERROR";
export const DELETE_ERROR = "DELETE_ERROR";

type SetErrorActionType = {
  type: typeof SET_ERROR;
  error: string;
};

type DeleteErrorActionType = {
  type: typeof DELETE_ERROR;
};

export type ValidationActionsType = SetErrorActionType | DeleteErrorActionType;

export function useValidationReducer() {
  const initialState: Array<string> | null = null;
  const reducer: Reducer<Array<string> | null, ValidationActionsType> = (
    state,
    action
  ) => {
    switch (action.type) {
      case SET_ERROR:
        if (!state) return [action.error];

        const nextState = [...state];

        const isDuplicateError = nextState.find(
          (error) => error === action.error
        );

        if (!isDuplicateError) {
          nextState.push(action.error);
        }

        return nextState;
      case DELETE_ERROR:
        const removeErrors = null;
        return removeErrors;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { errorState: state, errorDispatch: dispatch };
}
