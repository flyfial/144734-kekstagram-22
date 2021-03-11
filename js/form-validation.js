const testStartWith = (hashtag) => {
  if (!hashtag.startsWith('#')) {
    return 'хэш-тег должен начинаться с символа # (решётка)';
  }
  return undefined;
};

const testShortValueLength = (hashtag) => {
  if (hashtag.length === 1) {
    return 'хеш-тег не может состоять только из одной решётки';
  }
  return undefined;
};

const testValidity = (hashtag) => {
  const regex = /^[A-Za-z0-9]+$/;
  const isValid = regex.test(hashtag.split('#')[1]);
  if (!isValid) {
    return 'хэш-тэг не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
  }
  return undefined;
};

const testLongValueLength = (hashtag) => {
  if (hashtag.length > 20) {
    return 'максимальная длина одного хэш-тега 20 символов, включая решётку';
  }
  return undefined;
};

const testUniqueName = (hashtagArray, index) => {
  if (hashtagArray[index - 1] === hashtagArray[index]) {
    return 'один и тот же хэш-тег не может быть использован дважды';
  }
  return undefined;
};

const testHashtagQuantity = (hashtagArray) => {
  if (hashtagArray.length > 5) {
    return 'нельзя указать больше пяти хэш-тегов';
  }
  return undefined;
};

const testCommentLength = (commentInput) => {
  if (commentInput.value.length >= 140) {
    return 'длина комментария не может составлять больше 140 символов';
  }
  return undefined;
};

const highlightErrorBackground = (element) => {
  element.style.backgroundColor = '#FFDBDB';
};

const whitenBackground = (element) => {
  element.style.backgroundColor = 'white';
}

export {testStartWith, testShortValueLength, testValidity, testLongValueLength, testUniqueName, testHashtagQuantity, testCommentLength, highlightErrorBackground, whitenBackground};
