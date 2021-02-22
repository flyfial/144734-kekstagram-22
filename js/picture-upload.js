import {isEscEvent} from './util.js';
import {body} from './data.js';
import {scaleValue, imgPreview} from './scale.js';
import {effectSlider} from './filters.js';

const uploadFileControl = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imageUploadForm = document.querySelector('.img-upload__overlay');

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideUploadForm();
  }
};

const showUploadForm = () => {
  imageUploadForm.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleValue.value = 100 + '%';
  imgPreview.style.transform = 'scale(1)';
  imgPreview.className = 'effects__preview--none';
  imgPreview.style.filter = 'none';
  effectSlider.classList.add('visually-hidden');
  document.addEventListener('keydown', onModalEscKeydown);
};

const hideUploadForm = () => {
  imageUploadForm.classList.add('hidden');
  body.classList.remove('modal-open');
  scaleValue.value = 100 + '%';
  document.removeEventListener('keydown', onModalEscKeydown);
};

uploadFileControl.addEventListener('change', showUploadForm);

uploadCancel.addEventListener('click', hideUploadForm);
