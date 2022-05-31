import React, { useEffect, useState } from "react";
import { FilterComponent } from "./FilterComponent";
import { filterShow } from "./animation/show";
import { useDispatch, useSelector } from "react-redux";
import { UserDataType } from "../../../../../store/request/types";
import { StateType } from "../../../../../store/rootTypes";
import { filterById } from "./functions/filters/id";
import { usersFilter } from "../../../../../store/filter/actions";
import { filterByName } from "./functions/filters/name";
import { filterByDate } from "./functions/filters/date";
import { rotateFilterArrow } from "./animation/rotate";

interface IFilterProps {
  className?: string;
}

export function Filter({ className }: IFilterProps) {
  const dispatch = useDispatch();

  //Стейт для указания направления сортировки
  const [idReverse, setIdReverse] = useState(true);
  const [nameReverse, setNameReverse] = useState(false);
  const [createdReverse, setCreatedReverse] = useState(false);
  const [changedReverse, setChangedReverse] = useState(false);

  //Стейт для указания текущего поля по которому отсортирован список
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const users = useSelector<StateType, Array<UserDataType> | null>(
    (state) => state.data
  );

  useEffect(() => {
    //Анимация появления блока Filter
    filterShow();
  }, []);

  useEffect(() => {
    const filter: HTMLElement | null = document.querySelector(".filter");

    if (!filter) return;

    function HandleClick(e: MouseEvent) {
      if (!users) return;

      const target = e.target;

      if (!target || !(target instanceof HTMLElement)) return;

      switch (target.dataset.attr) {
        case "id":
          let sortedUsers = filterById([...users], idReverse);
          dispatch(usersFilter(sortedUsers));
          setIdReverse(!idReverse);
          setTarget(target);
          rotateFilterArrow(target, idReverse);
          break;
        case "name":
          sortedUsers = filterByName([...users], nameReverse);
          dispatch(usersFilter(sortedUsers));
          setNameReverse(!nameReverse);
          setTarget(target);
          rotateFilterArrow(target, nameReverse);
          break;
        case "created":
          sortedUsers = filterByDate([...users], createdReverse, "created");
          dispatch(usersFilter(sortedUsers));
          setCreatedReverse(!createdReverse);
          setTarget(target);
          rotateFilterArrow(target, createdReverse);
          break;
        case "changed":
          sortedUsers = filterByDate([...users], changedReverse, "changed");
          dispatch(usersFilter(sortedUsers));
          setChangedReverse(!changedReverse);
          setTarget(target);
          rotateFilterArrow(target, changedReverse);
          break;
      }
    }

    if (target) {
      const filterBtns = document.querySelectorAll(".filter__btn");
      filterBtns.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }

    filter.addEventListener("click", HandleClick);

    return () => {
      filter.removeEventListener("click", HandleClick);
    };
  }, [users]);

  return (
    <ul className={["filter", className].join(" ")}>
      <FilterComponent />
    </ul>
  );
}
