import React, { useLayoutEffect } from "react";

import { filterShow } from "./animation/show";

import { FilterComponent } from "./FilterComponent";

interface IFilterProps {
  className?: string;
}

export function Filter({ className }: IFilterProps) {

  useLayoutEffect(() => {
    filterShow()
  }, [])

  return <FilterComponent className={className} />;
}
