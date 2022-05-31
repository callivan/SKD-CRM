import { UserDataType } from "../../../../../../../store/request/types";

export function filterById(users: Array<UserDataType>, reverse: boolean) {
  return reverse
    ? users.sort((a, b) => a.id - b.id).reverse()
    : users.sort((a, b) => a.id - b.id);
}
