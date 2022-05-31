import { ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { StateType } from "../rootTypes";
import { createError } from "./requestsError";
import {
  UsersActionsTypes,
  UserDataType,
  UsersRequestErrorType,
  UsersRequestSuccessType,
  UsersRequestType,
  USERS_REQUEST,
  USERS_REQUEST_ERROR,
  USERS_REQUEST_SUCCESS,
  UserPostActionType,
  UserPatchActionType,
  UserDeleteActionType,
  USER_DELETE,
  USER_PATCH,
  USER_POST,
} from "./types";

export const usersRequestAction: ActionCreator<UsersRequestType> = () => ({
  type: USERS_REQUEST,
});

export const usesrRequestErrorAction: ActionCreator<
  UsersRequestErrorType
> = (error: { status: number; message: string }) => ({
  type: USERS_REQUEST_ERROR,
  status: error.status,
  message: error.message,
});

export const usersRequestSuccesAction: ActionCreator<
  UsersRequestSuccessType
> = (data: Array<UserDataType>) => ({
  type: USERS_REQUEST_SUCCESS,
  data,
});

export const userPostAction: ActionCreator<UserPostActionType> = () => ({
  type: USER_POST,
});

export const userPatchAction: ActionCreator<UserPatchActionType> = () => ({
  type: USER_PATCH,
});

export const userDeleteAction: ActionCreator<UserDeleteActionType> = () => ({
  type: USER_DELETE,
});

export const request =
  (
    url: string,
    method: "GET" | "POST" | "PATCH" | "DELETE" = "GET",
    user?: UserDataType
  ): ThunkAction<Promise<boolean>, StateType, any, UsersActionsTypes> =>
  async (dispatch) => {
    try {
      if (method === "DELETE") {
        dispatch(userDeleteAction());
      } else if (method === "POST") {
        dispatch(userPostAction());
      } else if (method === "PATCH") {
        dispatch(userPatchAction());
      } else {
        dispatch(usersRequestAction());
      }

      //Если запрос !== GET, то передаем тело запроса и заголовки
      const headers = { "Content-Type": "application/json; charset=UTF-8" };
      const body = JSON.stringify(user);
      const params = { method, headers, body };
      const request = await fetch(url, method !== "GET" ? params : {});

      if (!/[2,3]0[0-8]/g.test(String(request.status))) {
        throw createError(request.status);
      }

      if (method === "GET") {
        const response: Array<any> = await request.json();
        const users: Array<UserDataType> = response
          .map((user: any): UserDataType => {
            return {
              id: user.id,
              name: user.name,
              surname: user.surname,
              patronymic: user.patronymic,
              created: { date: user.created.date, time: user.created.time },
              changed: { date: user.changed.date, time: user.changed.time },
              social: user.social,
            };
          })
          .sort((a, b) => a.id - b.id);

        dispatch(usersRequestSuccesAction(users));
      }
    } catch (error: any) {
      dispatch(
        usesrRequestErrorAction({
          status: error.status,
          message: error.message,
        })
      );
    } finally {
      if (method !== "GET") {
        dispatch(request("http://localhost:3001/users"));
      }
      return true;
    }
  };
