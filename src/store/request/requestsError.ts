export function createError(status: number) {
  let error = {
    status,
    message: "",
  };

  switch (status) {
    case 400:
      return { ...error, message: "Неверный разпрос!" };
    case 401:
      return { ...error, message: "Необходима авторизация!" };
    case 402:
      return { ...error, message: "Необходима оплата!" };
    case 403:
      return { ...error, message: "Отсутствуют права доступа к ресурсу!" };
    case 404:
      return { ...error, message: "Ресурс не найден!" };
    case 405:
      return { ...error, message: "Запрещенный метод!" };
    case 406:
      return { ...error, message: "Контент не найден!" };
    case 408:
      return { ...error, message: "Соединение прервано!" };
    case 410:
      return { ...error, message: "Контент удален с сервера!" };
    case 413:
      return { ...error, message: "Превышен лимин запросов!" };
    case 414:
      return { ...error, message: "Слишком длинный URI!" };
    case 500:
      return { ...error, message: "Неизвестная ошибка сервера!" };
    case 501:
      return { ...error, message: "Методот не поддерживается сервером!" };
    case 503:
      return { ...error, message: "Сервер не работает!" };
    case 505:
      return { ...error, message: "Устаревший запрос!" };
  }

  return error;
}
