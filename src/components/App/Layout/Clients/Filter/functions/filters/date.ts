import { UserDataType } from "../../../../../../../store/request/types";

export function filterByDate(
  users: Array<UserDataType>,
  reverse: boolean,
  value: "created" | "changed"
) {
  return reverse
    ? users
        .sort(
          (a, b) =>
            getDataMs(a[value].date, a[value].time) -
            getDataMs(b[value].date, b[value].time)
        )
        .reverse()
    : users.sort(
        (a, b) =>
          getDataMs(a[value].date, a[value].time) -
          getDataMs(b[value].date, b[value].time)
      );
}

function getDataMs(date: string, time: string) {
  const HOUR = 3600000;
  const MINUTE = 60000;
  return (
    time
      .split(":")
      .map((string) => Number(string))
      .reduce((acc, number, index) => {
        if (index === 0) {
          return (acc += number * HOUR);
        }
        return (acc += number * MINUTE);
      }, 0) + new Date(date).getTime()
  );
}
