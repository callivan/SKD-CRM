import React, { useLayoutEffect, useState } from "react";

import { HeaderComponent } from "./HeaderComponent";

import { uploadingSearch } from "./uploadingSearch";

const Search = React.lazy(() => import("./Search"));

export const Header = React.memo(function Header() {
  const [isUploadSearch, setUploadSerarch] = useState(false);

  useLayoutEffect(() => {
    const header = document.querySelector(".header");

    if (!header) return;

    const resizeObserver = uploadingSearch(setUploadSerarch);

    resizeObserver.observe(header);

    return () => {
      resizeObserver.disconnect();
    };
  }, [isUploadSearch]);

  return (
    <HeaderComponent>
      {isUploadSearch && <Search className="header__search" />}
    </HeaderComponent>
  );
});
