import React from "react";

import { SocialType } from "../../../../../../../../store/request/types";
import { FB, EMAIL, OTHER, PHONE, VK } from "./icons";

export function createSocial(socialData: Array<SocialType>) {
  if (!socialData.length) return null;

  return socialData.map((social, index) => {
    if (!social.data) return null;

    let icon = OTHER;

    //Если тип контакта совпадает с каким-нибудь из ниже следующих, то в переменную icon передаем нужную иконку
    switch (social.type) {
      case "vk": {
        icon = VK;
        break;
      }
      case "fb": {
        icon = FB;
        break;
      }
      case "phone": {
        icon = PHONE;
        break;
      }
      case "email": {
        icon = EMAIL;
        break;
      }
    }

    return (
      <li key={`${social.data + index}`} className={"social__item"}>
        <span
          className="social__icon"
          role="tooltip"
          tabIndex={0}
          aria-label={`Социальная сеть ${social.type}`}
        >
          {icon}
        </span>
        <div className={"social__hint"}>
          <span
            className={"social__hint-content"}
          >{`${social.type}: ${social.data}`}</span>
          <span className={"social__hint-arrow"}></span>
        </div>
      </li>
    );
  });
}
