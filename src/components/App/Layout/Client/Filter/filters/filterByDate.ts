import { UserDataType } from "../../../../../../store/get/types";
import { getDataMs } from "../getDataMs";

let reverse = false;

export function dateFilter(
  field: "changed" | "created",
  users: Array<UserDataType>
) {
  if (!reverse) {
    users.sort(
      (a, b) =>
        getDataMs(a[`${field}`].date, a[`${field}`].time) -
        getDataMs(b[`${field}`].date, b[`${field}`].time)
    );
  } else {
    users
      .sort(
        (a, b) =>
          getDataMs(a[`${field}`].date, a[`${field}`].time) -
          getDataMs(b[`${field}`].date, b[`${field}`].time)
      )
      .reverse();
  }

  reverse = !reverse;

  return users;
}
