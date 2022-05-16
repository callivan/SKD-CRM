import React, { useLayoutEffect, useState } from "react";

import { headerShow } from "./animation/show";

import { HeaderComponent } from "./HeaderComponent";

const Search = React.lazy(() => import("./Search"));

export function Header() {
  const [isUploadSearch, setUploadSerarch] = useState(false);

  useLayoutEffect(() => {
    const header = document.querySelector(".header");
    let media = window.matchMedia("(min-width: 768px)");
    let width = document.documentElement.offsetWidth;

    if (!header) return;

    headerShow(media.matches);

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (width !== entry.contentRect.width) {
          if (media.matches) {
            setUploadSerarch(true);
          } else {
            setUploadSerarch(false);
          }
          width = entry.contentRect.width;
        }
      });
    });

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
