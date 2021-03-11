import {showSuccessMessage, showErrorMessage} from './util.js';
import {hideUploadForm} from './process-img-upload-form.js';
import {testStartWith, testShortValueLength, testValidity, testLongValueLength, testUniqueName, testHashtagQuantity, testCommentLength, highlightErrorBackground, whitenBackground} from './form-validation.js';

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
    let error = testStartWith(hashtag)
    || testShortValueLength(hashtag)
    || testValidity(hashtag)
    || testLongValueLength(hashtag)
    || testUniqueName(hashtagArray, index)
    || testHashtagQuantity(hashtagArray);

    if (error) {
      highlightErrorBackground(hashtagInput);
      hashtagInput.setCustomValidity(error);
    } else {
      whitenBackground(hashtagInput);
      hashtagInput.setCustomValidity('');
    }
  });
  hashtagInput.reportValidity();

  if (hashtagInput.value === '') {
    whitenBackground(hashtagInput);
    hashtagInput.setCustomValidity('');
  }
  hashtagInput.reportValidity();
});

commentInput.addEventListener('input', () => {
  let error = testCommentLength(commentInput);
  if (error) {
    highlightErrorBackground(commentInput);
    commentInput.setCustomValidity(error);
  } else {
    whitenBackground(commentInput);
    commentInput.setCustomValidity('');
  }
  commentInput.reportValidity();
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
