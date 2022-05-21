import { UserDataType } from "../../../../../../store/get/types";

let reverse = true;

export function idFilter(users: Array<UserDataType>) {
  if (!reverse) {
    users.sort((a, b) => a.id - b.id);
  } else {
    users.sort((a, b) => a.id - b.id).reverse();
  }

  reverse = !reverse;

  return users;
}
