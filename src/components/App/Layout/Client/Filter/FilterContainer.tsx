import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../../store/rootTypes";
import { UserDataType } from "../../../../../store/get/types";

import { FilterComponent } from "./FilterComponent";

import { rotateFilterArrow } from "./animation/rotate";

import { dateFilter } from "./filters/filterByDate";
import { alphabetFilter } from "./filters/filterByAlphabet";
import { idFilter } from "./filters/filterById";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { usersFilter } from "../../../../../store/filter/actions";

interface IFilterProps {
  className?: string;
}

export function Filter({ className }: IFilterProps) {
  const dispatch = useDispatch();
  const users = useSelector<StateType, Array<UserDataType> | null>(
    (state) => state.data
  );
  const [id, setId] = useState(false);
  const [name, setName] = useState(true);
  const [create, setCreate] = useState(true);
  const [change, setChnage] = useState(true);

  function filterSortHandle(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const target = e.target;

    if (!(target instanceof HTMLElement) || !users) return;
    const sortUsers = users.slice(0);

    if (target.dataset.attr) {
      let filter = idFilter.bind(null, sortUsers);
      let state = { value: id, setter: setId };

      switch (target.dataset.attr) {
        case "name":
          filter = alphabetFilter.bind(null, sortUsers);
          state = { value: name, setter: setName };
          break;
        case "created":
          filter = dateFilter.bind(null, "created", sortUsers);
          state = { value: create, setter: setCreate };
          break;
        case "changed":
          filter = dateFilter.bind(null, "changed", sortUsers);
          state = { value: change, setter: setChnage };
          break;
        default:
          filter;
          state;
      }

      setFiltration(sortUsers, filter, target, dispatch, state);
    }
  }

  return <FilterComponent onClick={filterSortHandle} className={className} />;
}

function removeClassActive(className: string) {
  const elems = document.querySelectorAll(`.${className}`);
  elems.forEach((elem) => elem.classList.remove("active"));
}

function setFiltration(
  users: Array<UserDataType>,
  filter: () => UserDataType[],
  target: HTMLElement,
  dispatch: Dispatch<AnyAction>,
  state: {
    value: boolean;
    setter: React.Dispatch<React.SetStateAction<boolean>>;
  }
) {
  filter();
  dispatch(usersFilter(users));

  rotateFilterArrow(target.querySelector(".filter__arrow"), state.value);
  removeClassActive(target.className);
  target.classList.add("active");

  state.setter(!state.value);
}
