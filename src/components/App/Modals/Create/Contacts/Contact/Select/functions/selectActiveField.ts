export function selectActiveField(
  type: "phone" | "secondPhone" | "vk" | "fb" | "mail" | string
) {
  switch (type) {
    case "phone":
      return "Телефон";
    case "secondPhone":
      return "Доп.телефон";
    case "vk":
      return "Vk";
    case "fb":
      return "Facebook";
    case "email":
      return "Email";
    default:
      return "Другое";
  }
}
