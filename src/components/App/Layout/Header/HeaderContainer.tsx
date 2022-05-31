import React, { useEffect, useLayoutEffect, useState } from "react";
import { HeaderComponent } from "./HeaderComponent";
import { uploadSearch } from "./functions/uploadSearchComponent";
import { headerShow } from "./animations/show";

const Search = React.lazy(() => import("./Search"));

export function Header() {
  const [isUploadSearch, setUploadSerarch] = useState(false);

  useEffect(() => {
    //Анимация появления блока Header
    headerShow();
  }, []);

  useLayoutEffect(() => {
    const header = document.querySelector(".header");

    if (!header) return;

    //Если размер экрана >= 768px рендерим блок Search
    const resizeObserver = uploadSearch(setUploadSerarch);
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
}
