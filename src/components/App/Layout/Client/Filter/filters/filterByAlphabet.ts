import { UserDataType } from "../../../../../../store/get/types";

let reverse = false;

export function alphabetFilter(users: Array<UserDataType>) {
  if (!reverse) {
    users.sort((a, b) =>
      a.name.localeCompare(b.name, "ru", {
        ignorePunctuation: true,
        sensitivity: "base",
      })
    );
  } else {
    users
      .sort((a, b) =>
        a.name.localeCompare(b.name, "ru", {
          ignorePunctuation: true,
          sensitivity: "base",
        })
      )
      .reverse();
  }

  reverse = !reverse;

  return users;
}
