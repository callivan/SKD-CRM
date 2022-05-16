import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import {
  UsersActionsTypes,
  UserDataType,
  UsersRequestErrorType,
  UsersRequestSuccessType,
  UsersRequestType,
  USERS_REQUEST,
  USERS_REQUEST_ERROR,
  USERS_REQUEST_SUCCESS,
} from "./types";

export const usersRequest: ActionCreator<UsersRequestType> = () => ({
  type: USERS_REQUEST,
});

export const usesrRequestError: ActionCreator<UsersRequestErrorType> = (
  err: string
) => ({
  type: USERS_REQUEST_ERROR,
  error: err,
});

export const usersRequestSucces: ActionCreator<UsersRequestSuccessType> = (
  data: Array<UserDataType>
) => ({
  type: USERS_REQUEST_SUCCESS,
  data,
});

export const getUsers =
  (): ThunkAction<void, any, any, UsersActionsTypes> => async (dispatch) => {
    try {
      dispatch(usersRequest());
      const data = await fetch(" http://localhost:3001/users");

      if (data.status !== 200) {
        throw new Error(`Не удалось получить данные с ресурса: ${data.url}`);
      }

      const response: Array<any> = await data.json();
      if (response.length < 1 || !response.length) {
        throw new Error(`Ресурс: ${data.url} пуст`);
      }

      const users: Array<UserDataType> = response
        .map((user: any): UserDataType => {
          return {
            id: user.id,
            name: user.name,
            created: { date: user.created.date, time: user.created.time },
            changed: { date: user.changed.date, time: user.changed.time },
            social: user.social,
          };
        })
        .sort((a, b) => a.id - b.id);

      dispatch(usersRequestSucces(users));
    } catch (err: any) {
      dispatch(usesrRequestError(err.message));
    }
  };
