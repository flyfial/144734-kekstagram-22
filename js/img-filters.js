/* global noUiSlider:readonly */
import {imgPreview} from './scale.js';

const effectSlider = document.querySelector('.effect-level');
const effects = document.querySelector('.img-upload__effects');
const effectValueLevel = document.querySelector('.effect-level__value');

const effectChangeHandler = (evt) => {
  const evtParent = evt.target.closest('ul > li');
  const filterEffect = evtParent.querySelector('span');

  if (evt.target.matches('input[type="radio"]')) {
    imgPreview.className = filterEffect.className;
    imgPreview.classList.remove('effects__preview');
  }

  if (imgPreview.className === 'effects__preview--none') {
    effectSlider.classList.add('visually-hidden');
    imgPreview.style.filter = 'none';
  } else {
    effectSlider.classList.remove('visually-hidden');
  }
};

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => {
      return parseFloat(value);
    },
  },
});

effectSlider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectValueLevel.value = unencoded[handle];

  if (imgPreview.className === 'effects__preview--chrome') {
    imgPreview.style.filter = 'grayscale(' + effectValueLevel.value +')';
  } else if (imgPreview.className === 'effects__preview--sepia') {
    imgPreview.style.filter = 'sepia(' + effectValueLevel.value +')';
  } else if (imgPreview.className === 'effects__preview--marvin') {
    imgPreview.style.filter = 'invert(' + effectValueLevel.value +'%)';
  } else if (imgPreview.className === 'effects__preview--phobos') {
    imgPreview.style.filter = 'blur(' + effectValueLevel.value +'px)';
  } else if (imgPreview.className === 'effects__preview--heat') {
    imgPreview.style.filter = 'brightness(' + effectValueLevel.value +')';
  }
});

const effectChanger = (evt) => {
  if (evt.target.value === 'chrome') {
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (evt.target.value === 'sepia') {
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  } else if (evt.target.value === 'marvin') {
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  } else if (evt.target.value === 'phobos') {
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  } else if (evt.target.value === 'heat') {
    effectSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
};

export {effects, effectSlider, effectChangeHandler, effectChanger};
