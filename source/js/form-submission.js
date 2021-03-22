import {showSuccessMessage, showErrorMessage} from './util.js';
import {hideUploadForm} from './form-process.js';

const imageUploadForm = document.querySelector('.img-upload__form');

const submitUserForm = (evt) => {
  const formData = new FormData(evt.target);
  evt.preventDefault();

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
};

const setUserFormSubmit = () => {
  imageUploadForm.addEventListener('submit', submitUserForm);
};

export {setUserFormSubmit, submitUserForm};
