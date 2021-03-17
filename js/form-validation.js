const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

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
  if (hashtagArray.indexOf(hashtagArray[index]) != index) {
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

const highlightError = (element) => {
  element.classList.add('error__text__hashtags');
};

const whitenError = (element) => {
  element.classList.remove('error__text__hashtags');
};

const testHashtagInput = () => {
  const hashtagArray = hashtagInput.value.toLowerCase().split(' ');
  let message = '';
  let error = hashtagArray.some((hashtag, index) => {
    return message = (
      testStartWith(hashtag)
      || testShortValueLength(hashtag)
      || testValidity(hashtag)
      || testLongValueLength(hashtag)
      || testUniqueName(hashtagArray, index)
      || testHashtagQuantity(hashtagArray)
    );
  });

  if (error) {
    highlightError(hashtagInput);
    hashtagInput.setCustomValidity(message);
  } else {
    whitenError(hashtagInput);
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();

  if (hashtagInput.value === '') {
    whitenError(hashtagInput);
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
};

const testCommentInput = () => {
  let error = testCommentLength(commentInput);
  if (error) {
    highlightError(commentInput);
    commentInput.setCustomValidity(error);
  } else {
    whitenError(commentInput);
    commentInput.setCustomValidity('');
  }
  commentInput.reportValidity();
};

export {hashtagInput, commentInput, testHashtagInput, testCommentInput, whitenError};
