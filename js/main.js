/* No.1 Функция, возвращающая случайное целое число из переданного диапазона включительно (Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
let getRandomIntInclusive = function (min, max) {
  if (max > min && min >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (max <= min || min < 0) {
    alert('Not gonna work');
  }
}
getRandomIntInclusive(0, 10); */


// No. 2 Функция как сверху, но с тернарными операторами
let getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return (max > min && min >= 0) ? Math.floor(Math.random() * (max - min + 1)) + min :
    (max <= min || min < 0) ? 'Я не работаю в отрицательном диапазоне' :
    // Здесь я плохо понимаю, почему нужна "последняя строка" без условия – иначе не работает.
      null;
}
getRandomIntInclusive(0, 10);


// No. 3 Функция для проверки максимальной длины строки
let getLineLength = function (line, maxLength) {
  return (line.length <= maxLength) ? true : false;
};

getLineLength('Will this work?', 20);
