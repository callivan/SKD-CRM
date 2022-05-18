import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../../store/rootTypes";
import { usersRequestSucces } from "../../../../../store/users/actions";
import { UserDataType } from "../../../../../store/users/types";

import { sortDate } from "./sortDate";

import { FilterComponent } from "./FilterComponent";

import { rotateFilterArrow } from "./animation/rotate";

interface IFilterProps {
  className?: string;
}

export function Filter({ className }: IFilterProps) {
  const dispatch = useDispatch();
  const [incId, setIncId] = useState(true);
  const [alphabet, setAlphabet] = useState(false);
  const [create, setCreate] = useState(false);
  const [change, setChange] = useState(false);
  const users = useSelector<StateType, Array<UserDataType> | null>(
    (state) => state.users.data
  );

  function filterSortHandle(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const target = e.target;

    if (!(target instanceof HTMLElement) || !users) return;
    const sortUsers = users.slice(0);

    if (target.dataset.id) {
      if (!incId) {
        sortUsers.sort((a, b) => a.id - b.id);
        rotateFilterArrow(0, target.querySelector(".filter__arrow"));
      } else {
        sortUsers.sort((a, b) => a.id - b.id).reverse();
        rotateFilterArrow(1, target.querySelector(".filter__arrow"));
      }

      setIncId(!incId);
      dispatch(usersRequestSucces(sortUsers));
    }

    if (target.dataset.name) {
      if (!alphabet) {
        sortUsers.sort((a, b) =>
          a.name.localeCompare(b.name, "ru", {
            ignorePunctuation: true,
            sensitivity: "base",
          })
        );
        rotateFilterArrow(0, target.querySelector(".filter__arrow"));
      } else {
        sortUsers
          .sort((a, b) =>
            a.name.localeCompare(b.name, "ru", {
              ignorePunctuation: true,
              sensitivity: "base",
            })
          )
          .reverse();
        rotateFilterArrow(1, target.querySelector(".filter__arrow"));
      }

      setAlphabet(!alphabet);
      dispatch(usersRequestSucces(sortUsers));
    }

    if (target.dataset.create) {
      if (!create) {
        sortUsers.sort(
          (a, b) =>
            sortDate(a.created.date, a.created.time) -
            sortDate(b.created.date, b.created.time)
        );
        rotateFilterArrow(0, target.querySelector(".filter__arrow"));
      } else {
        sortUsers
          .sort(
            (a, b) =>
              sortDate(a.created.date, a.created.time) -
              sortDate(b.created.date, b.created.time)
          )
          .reverse();
        rotateFilterArrow(1, target.querySelector(".filter__arrow"));
      }

      setCreate(!create);
      dispatch(usersRequestSucces(sortUsers));
    }

    if (target.dataset.change) {
      if (!change) {
        sortUsers.sort(
          (a, b) =>
            sortDate(a.changed.date, a.changed.time) -
            sortDate(b.changed.date, b.changed.time)
        );
        rotateFilterArrow(0, target.querySelector(".filter__arrow"));
      } else {
        sortUsers
          .sort(
            (a, b) =>
              sortDate(a.changed.date, a.changed.time) -
              sortDate(b.changed.date, b.changed.time)
          )
          .reverse();
        rotateFilterArrow(1, target.querySelector(".filter__arrow"));
      }

      setChange(!change);
      dispatch(usersRequestSucces(sortUsers));
    }
  }

  return <FilterComponent onClick={filterSortHandle} className={className} />;
}
