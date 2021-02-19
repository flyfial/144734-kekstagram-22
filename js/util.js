import {NAMES, MESSAGES, DESCRIPTIONS, SIMILAR_PHOTO_DESCRIPTION_COUNT} from './data.js';

// Случайное целое число из переданного диапазона включительно (Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
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

// Проверка максимальной длины строки
const getLineLength = function (line, maxLength) {
  return (line.length <= maxLength) ? true : false;
};

// Случайный элемент массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

// Случайный массив в диапазоне вкл
const getRandomArray = function(min, max) {
  return new Array(getRandomInteger(min, max)).fill(null);
};

// Массив для описания фото
const getPhotoDescription = (_, index) => {
  return {
    id: index,
    url: 'photos/' + getRandomInteger(1, 25) + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
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

// Массив из описаний фото
const similarPhotoDescriptions = new Array(SIMILAR_PHOTO_DESCRIPTION_COUNT).fill(null).map(getPhotoDescription);
console.log(similarPhotoDescriptions);

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const commentList = document.querySelector('.social__comments');
const commentField = document.querySelector('.social__footer-text');
const commentBtn = document.querySelector('.social__footer-btn');

commentBtn.onclick = function (evt) {
  evt.preventDefault();

  const newComment = document.createElement('li');
  newComment.classList.add('social__comment');

  const newCommentImg = document.createElement('img');
  newCommentImg.classList.add('social__picture');
  newCommentImg.src = document.querySelector('.big-picture').querySelector('.social__footer').querySelector('.social__picture').src;
  newCommentImg.alt = 'имя комментатора';
  newCommentImg.width = 35;
  newCommentImg.height = 35;
  newComment.appendChild(newCommentImg);

  const newCommentText = document.createElement('p');
  newCommentText.classList.add('social__text');
  newComment.appendChild(newCommentText);
  newCommentText.textContent = commentField.value;

  if (commentField.value === '') {
    alert('Комментарии не могут быть пустыми – напишите что-нибудь');
  } else {
    commentField.value = '';
    commentList.append(newComment);
  }
};

export {getRandomInteger, getLineLength, getRandomArrayElement, getRandomArray, getPhotoDescription, similarPhotoDescriptions, isEnterEvent, isEscEvent};
