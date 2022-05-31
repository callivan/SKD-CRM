import { ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { request } from "../../../../../store/request/actions";
import { UsersActionsTypes } from "../../../../../store/request/types";
import { StateType } from "../../../../../store/rootTypes";
import { searchShow } from "./animations/show";
import { SearchComponent } from "./SearchComponent";

interface ISearchProps {
  className?: string;
}

export function Search({ className }: ISearchProps) {
  const [timer, setTimer] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const dispatch =
    useDispatch<ThunkDispatch<StateType, any, UsersActionsTypes>>();

  useEffect(() => {
    //Анимация появления блока Searсh
    searchShow();

    if (searchValue.trim()) {
      clearTimeout(timer);

      setTimer(
        setTimeout(() => {
          //Отправляем запрос с параметрами поиска
          dispatch(
            request(
              `http://localhost:3001/users${
                searchValue.trim() ? `?q=${searchValue}` : ""
              }`
            )
          );
        }, 300)
      );
    }
  }, [searchValue]);

  return (
    <SearchComponent
      className={className}
      value={searchValue}
      setValue={setSearchValue}
    />
  );
}
