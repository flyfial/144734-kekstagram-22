import {showSuccessMessage, showErrorMessage} from './util.js';
import {hideUploadForm} from './picture-upload.js';

const yourImageUploadForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

hashtagInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

commentInput.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

hashtagInput.addEventListener('input', () => {
  const hashtagArray = hashtagInput.value.toLowerCase().split(' ');

  hashtagArray.forEach((hashtag, index) => {
    const valueLength = hashtag.length;
    const regex = /^[A-Za-z0-9]+$/;
    const isValid = regex.test(hashtag.split('#')[1]);

    if (!hashtag.startsWith('#')) {
      hashtagInput.style.backgroundColor = '#FFDBDB';
      hashtagInput.setCustomValidity('хэш-тег должен начинаться с символа # (решётка)');
    } else if (valueLength === 1) {
      hashtagInput.style.backgroundColor = '#FFDBDB';
      hashtagInput.setCustomValidity('хеш-тег не может состоять только из одной решётки');
    } else if (!isValid) {
      hashtagInput.style.backgroundColor = '#FFDBDB';
      hashtagInput.setCustomValidity('хэш-тэг не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.');
    } else if (valueLength > 20) {
      hashtagInput.style.backgroundColor = '#FFDBDB';
      hashtagInput.setCustomValidity('максимальная длина одного хэш-тега 20 символов, включая решётку');
    } else if (hashtagArray[index - 1] === hashtagArray[index]) {
      hashtagInput.style.backgroundColor = '#FFDBDB';
      hashtagInput.setCustomValidity('один и тот же хэш-тег не может быть использован дважды');
    } else if (hashtagArray.length > 5) {
      hashtagInput.style.backgroundColor = '#FFDBDB';
      hashtagInput.setCustomValidity('нельзя указать больше пяти хэш-тегов');
    } else {
      hashtagInput.style.backgroundColor = 'white';
      hashtagInput.setCustomValidity('');
    }
  });
  hashtagInput.reportValidity();

  if (hashtagInput.value === '') {
    hashtagInput.style.backgroundColor = 'white';
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
});

const setUserFormSubmit = () => {
  yourImageUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);

    fetch(
      'https://22.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      },
    )
      .then((response) => {
        if (response.ok) {
          hideUploadForm();
          showSuccessMessage();
        } else {
          hideUploadForm();
          showErrorMessage();
        }
      })
      .catch(() => {
        hideUploadForm();
        showErrorMessage();
      });
  });
};

export {setUserFormSubmit, commentInput, hashtagInput};
