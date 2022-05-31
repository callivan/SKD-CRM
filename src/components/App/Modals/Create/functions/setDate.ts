export function setDateTime() {
  return {
    date: new Date().toLocaleDateString().split(".").reverse().join("-"),
    time: new Date().toLocaleTimeString().split(":").splice(0, 2).join(":"),
  };
}
