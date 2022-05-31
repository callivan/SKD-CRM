import { UserDataType } from "../../../../../../../store/request/types";

export function filterByName(users: Array<UserDataType>, reverse: boolean) {
  return reverse
    ? users
        .sort((a, b) =>
          a.name.localeCompare(b.name, "ru", {
            ignorePunctuation: true,
            sensitivity: "base",
          })
        )
        .reverse()
    : users.sort((a, b) =>
        a.name.localeCompare(b.name, "ru", {
          ignorePunctuation: true,
          sensitivity: "base",
        })
      );
}
