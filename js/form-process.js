import {body, isEscEvent} from './util.js';
import {scaleValue, imgPreview} from './scale.js';
import {effects, effectSlider, effectChangeHandler, effectChanger} from './img-filters.js';
import {commentInput, hashtagInput, testHashtagInput, testCommentInput, whitenError} from './form-validation.js';
import {setUserFormSubmit, submitUserForm} from './form-submission.js';

const uploadFileControl = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imageUploadOverlay = document.querySelector('.img-upload__overlay');
const effectOriginalButton = document.querySelector('#effect-none');
const imageUploadForm = document.querySelector('.img-upload__form');

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideUploadForm();
  }
};

const stopPropagation = (evt) => {
  evt.stopPropagation();
};

const showUploadForm = () => {
  imageUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  scaleValue.value = 100 + '%';
  imgPreview.style.transform = 'scale(1)';
  imgPreview.className = 'effects__preview--none';
  imgPreview.style.filter = 'none';
  effectSlider.classList.add('visually-hidden');
  document.addEventListener('keydown', onModalEscKeydown);
  uploadCancel.addEventListener('click', hideUploadForm);
  effects.addEventListener('change', effectChangeHandler);
  effects.addEventListener('change', effectChanger);
  hashtagInput.addEventListener('keydown', stopPropagation);
  commentInput.addEventListener('keydown', stopPropagation);
  hashtagInput.addEventListener('input', testHashtagInput);
  commentInput.addEventListener('input', testCommentInput);
  setUserFormSubmit();
};

const hideUploadForm = () => {
  imageUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  scaleValue.value = 100 + '%';
  imgPreview.style.transform = 'scale(1)';
  imgPreview.className = 'effects__preview--none';
  effectOriginalButton.checked = true;
  imgPreview.style.filter = 'none';
  hashtagInput.value = '';
  whitenError(hashtagInput);
  commentInput.value = '';
  whitenError(commentInput);
  uploadFileControl.value = null;
  document.removeEventListener('keydown', onModalEscKeydown);
  uploadCancel.removeEventListener('click', hideUploadForm);
  effects.removeEventListener('change', effectChangeHandler);
  effects.removeEventListener('change', effectChanger);
  hashtagInput.removeEventListener('keydown', stopPropagation);
  commentInput.removeEventListener('keydown', stopPropagation);
  hashtagInput.removeEventListener('input', testHashtagInput);
  commentInput.removeEventListener('input', testCommentInput);
  imageUploadForm.removeEventListener('submit', submitUserForm);
};


const setUploadFileControl = () => {
  uploadFileControl.addEventListener('change', showUploadForm);
};

export {uploadFileControl, showUploadForm, hideUploadForm, setUploadFileControl};
