import './util.js';
import './pictures.js';
import './big-pictures.js';
import {hideUploadForm} from './picture-upload.js';
import './scale.js';
import './filters.js';
import {setUserFormSubmit} from './img-upload-form.js';
import {displayGallery} from './pictures.js';

fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error (`${response.status} ${response.statusText}`);
  })
  .then((pictures) => {
    displayGallery(pictures);
  })
  .catch((err) => {
    alert ('Что-то пошло не так. Вот что считает сервер: ' + err);
  });

setUserFormSubmit(hideUploadForm);
