import { Reducer, useReducer } from "react";
import { SocialType } from "../../../../store/get/types";

import { useSerachUser } from "../useSearchUser";

const SET_CONTACT = "SET_CONTACT";

export type StateContactsReducer = Array<SocialType> | null;

export type StateContactReducer = {
  id: number;
  type: "phone" | "vk" | "fb" | "mail" | string;
  data: string;
};

export type ContactsReducerActionType = {
  type: typeof SET_CONTACT;
  data: StateContactReducer;
};

export function useContactsReducer() {
  const user = useSerachUser();
  const initialState: StateContactsReducer = user ? user.social : null;
  const reducer: Reducer<StateContactsReducer, ContactsReducerActionType> = (
    state,
    action
  ) => {
    switch (action.type) {
      case SET_CONTACT:
        if (!state) {
          state = [];
          state.push(action.data);
        } else {
          const index = state.findIndex(
            (contact) => contact.id === action.data.id
          );

          if (index === -1) {
            state.push(action.data);
          } else {
            state.splice(index, 1, action.data);
          }
        }

        return state;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return { contactsState: state, contactsDispatch: dispatch };
}
