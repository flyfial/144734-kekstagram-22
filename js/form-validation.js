const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
let message;

const testStartWith = (hashtag) => {
  if (!hashtag.startsWith('#')) {
    message = 'хэш-тег должен начинаться с символа # (решётка)';
    return 'хэш-тег должен начинаться с символа # (решётка)';
  }
  return undefined;
};

const testShortValueLength = (hashtag) => {
  if (hashtag.length === 1) {
    message = 'хеш-тег не может состоять только из одной решётки';
    return 'хеш-тег не может состоять только из одной решётки';
  }
  return undefined;
};

const testValidity = (hashtag) => {
  const regex = /^[A-Za-z0-9]+$/;
  const isValid = regex.test(hashtag.split('#')[1]);
  if (!isValid) {
    message = 'хэш-тэг не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
    return 'хэш-тэг не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.';
  }
  return undefined;
};

const testLongValueLength = (hashtag) => {
  if (hashtag.length > 20) {
    message = 'максимальная длина одного хэш-тега 20 символов, включая решётку';
    return 'максимальная длина одного хэш-тега 20 символов, включая решётку';
  }
  return undefined;
};

const testUniqueName = (hashtagArray, index) => {
  if (hashtagArray[index - 1] === hashtagArray[index]) {
    message = 'один и тот же хэш-тег не может быть использован дважды';
    return 'один и тот же хэш-тег не может быть использован дважды';
  }
  return undefined;
};

const testHashtagQuantity = (hashtagArray) => {
  if (hashtagArray.length > 5) {
    message = 'нельзя указать больше пяти хэш-тегов';
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
};

const testHashtagInput = () => {
  const hashtagArray = hashtagInput.value.toLowerCase().split(' ');

  let error = hashtagArray.some((hashtag, index) => {
    return (
      testStartWith(hashtag)
      || testShortValueLength(hashtag)
      || testValidity(hashtag)
      || testLongValueLength(hashtag)
      || testUniqueName(hashtagArray, index)
      || testHashtagQuantity(hashtagArray)
    );
  });

  if (error) {
    highlightErrorBackground(hashtagInput);
    hashtagInput.setCustomValidity(message);
  } else {
    whitenBackground(hashtagInput);
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();

  if (hashtagInput.value === '') {
    whitenBackground(hashtagInput);
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
};

const testCommentInput = () => {
  let error = testCommentLength(commentInput);
  if (error) {
    highlightErrorBackground(commentInput);
    commentInput.setCustomValidity(error);
  } else {
    whitenBackground(commentInput);
    commentInput.setCustomValidity('');
  }
  commentInput.reportValidity();
};

export {hashtagInput, commentInput, testHashtagInput, testCommentInput, whitenBackground};
