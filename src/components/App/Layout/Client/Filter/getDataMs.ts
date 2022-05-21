export function getDataMs(date: Date, time: string) {
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
