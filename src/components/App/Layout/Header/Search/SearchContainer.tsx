import React from "react";

import { SearchComponent } from "./SearchComponent";

interface ISearchProps {
  className?: string;
}

export function Search({ className }: ISearchProps) {
  return <SearchComponent className={className} />;
}
