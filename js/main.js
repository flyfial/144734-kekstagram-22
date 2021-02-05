// No. 1 Функция, возвращающая случайное целое число из переданного диапазона включительно (Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
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

//Задание No. 3
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const NAMES = ['Рэйчел Грин', 'Моника Геллер', 'Фиби Буффе', 'Джоуи Триббиани', 'Чендлер Бинг', 'Елена Гилберт', 'Кэтрин Пирс', 'Стефан Сальваторе', 'Дэймон Сальваторе', 'Джереми Гилберт', 'Дженна Соммерс', 'Бонни Беннет', 'Кэролайн Форбс', 'Мэтт Донован', 'Викки Донован', 'Тайлер Локвуд', 'Аларик Зальцман', 'Клаус Майклсон', 'Энзо Сент-Джон', 'Элайджа Майклсон', 'Коул Майклсон', 'Ребекка Майклсон', 'Финн Майклсон', 'Лив Паркер', 'Люк Паркер'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const SIMILAR_PHOTO_DESCRIPTION_COUNT = 25;

const getRandomArray = function(min, max) {
  return new Array(getRandomInteger(min, max)).fill(null);
};

const photoDescription = (_, index) => {
  return {
    id: index,
    url: 'photos/' + getRandomInteger(1, 25) + '.jpg',
    description: 'Моя самая любимая фотография',
    likes: getRandomInteger(15, 200),
    comments: getRandomArray(1, 3).map(() => ( {
      id: index + getRandomInteger(26, 51),
      avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
      message: MESSAGES
        .sort(function() { return .5 - Math.random() })
        .slice(0, getRandomInteger(1, 2))
        .join(' '),
      name: getRandomArrayElement(NAMES),
    })),
  };
}

const similarPhotoDescriptions = new Array(SIMILAR_PHOTO_DESCRIPTION_COUNT).fill(null).map(photoDescription);
console.log(similarPhotoDescriptions);
