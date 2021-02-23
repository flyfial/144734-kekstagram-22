const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

commentInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

hashtagInput.addEventListener('invalid', () => {
  const hashtagArray = hashtagInput.value.split(' ');

  hashtagArray.forEach((hashtag, index) => {
    const valueLength = hashtag.length;
    const regex = /^[A-Za-z0-9]+$/
    const isValid = regex.test(hashtag.split('#')[1]);

    if (!hashtag.startsWith('#')) {
      hashtagInput.setCustomValidity('хэш-тег должен начинаться с символа # (решётка)')
    } else if (valueLength === 1) {
      hashtagInput.setCustomValidity('хеш-тег не может состоять только из одной решётки')
    } else if (!isValid) {
      hashtagInput.setCustomValidity('хэш-тэг не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.')
    } else if (valueLength > 20) {
      hashtagInput.setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
    } else if (hashtagArray[index - 1] === hashtagArray[index]) {
      hashtagInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды')
    } else if (hashtagArray.length > 5) {
      hashtagInput.setCustomValidity('нельзя указать больше пяти хэш-тегов')
    } else {
      hashtagInput.setCustomValidity('');
    }
  })
  hashtagInput.reportValidity();
});

commentInput.addEventListener('invalid', () => {
  if (commentInput.value.length > 140) {
    commentInput.setCustomValidity('длина комментария не может составлять больше 140 символов');
  } else {
    commentInput.setCustomValidity('');
  }
  commentInput.reportValidity();
});
