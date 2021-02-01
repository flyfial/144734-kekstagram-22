// No.1 Функция, возвращающая случайное целое число из переданного диапазона включительно (Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
const getRandomInteger = function (min, max) {
  if (min < 0) {
    throw new Error('Отрицательные значения запрещены');
  }

  if (min > max) {
    throw new Error('Значение "от" не может быть больше, чем значение "до"');
  }

  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

getRandomInteger(0, 10);


// No. 2 Функция для проверки максимальной длины строки
const getLineLength = function (line, maxLength) {
  return (line.length <= maxLength) ? true : false;
};

getLineLength('Will this work?', 20);
