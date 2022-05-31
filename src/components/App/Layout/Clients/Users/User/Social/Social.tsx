import React from "react";

import { SocialType } from "../../../../../../../store/request/types";
import { createSocial } from "./functions/createSocial";

import styles from "./social.scss";

interface ISocialProps {
  social: Array<SocialType>;
}

export function Social({ social }: ISocialProps) {
  return <ul className={styles["social"]}>{createSocial(social)}</ul>;
}
