export const FORBIDDEN_SYMBOL =
  "Во время ввода использовались запрещенные символы.";
export const NECESSARILY_FILL =
  "Все поля являются обязательными для заполнения.";

export function validateForm(target: HTMLInputElement) {
  let result: string | null = null;

  if (target.validity.patternMismatch) {
    result = FORBIDDEN_SYMBOL;
    target.setCustomValidity(" ");
  } else if (!target.value.trim()) {
    result = NECESSARILY_FILL;
    target.setCustomValidity(" ");
  } else {
    result = null;
    target.setCustomValidity("");
  }

  return result;
}
