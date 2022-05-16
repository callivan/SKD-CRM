import React from "react";

import { SocialType } from "../../../../../../../store/users/types";
import { FB, MAIL, OTHER, PHONE, VK } from "./icons";

import styles from "./social.scss";

interface ISocialProps {
  social: Array<SocialType>;
}

export function Social({ social }: ISocialProps) {
  return <ul className={styles["social"]}>{createSocial(social)}</ul>;
}

function createSocial(socialData: Array<SocialType>) {
  return socialData.map((social, index) => {
    if (!social.data) return;

    let icon = OTHER;
    let ariaLabel = "";

    switch (social.type) {
      case "vk": {
        icon = VK;
        ariaLabel = `Социальная сеть вконтаке, данные клиента: ${social.data}`;
        break;
      }
      case "fb": {
        icon = FB;
        ariaLabel = `Социальная сеть facebook, данные клиента: ${social.data}`;
        break;
      }
      case "phone": {
        icon = PHONE;
        ariaLabel = `Телефон клиента: ${social.data}`;
        break;
      }
      case "mail": {
        icon = MAIL;
        ariaLabel = `Электронная почта клиента: ${social.data}`;
        break;
      }
    }

    return (
      <li key={`${social.data + index}`} className={styles["social__item"]}>
        <span
          className="social__icon"
          role="tooltip"
          tabIndex={0}
          aria-label={ariaLabel}
        >
          {icon}
        </span>
        <div className={styles["social__hint"]}>
          <span
            className={styles["social__hint-content"]}
          >{`${social.type}: ${social.data}`}</span>
          <span className={styles["social__hint-arrow"]}></span>
        </div>
      </li>
    );
  });
}
