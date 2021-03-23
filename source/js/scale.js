const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const SCALE_QUARTER = 25;
const SCALE_HALF = 50;
const SCALE_THREEQUARTERS = 75;
const SCALE_FULL = 100;

scaleValue.value = 100 + '%';

const scaleBigger = () => {
  if (parseInt(scaleValue.value, 10) === SCALE_FULL) {
    scaleValue.value = parseInt(scaleValue.value, 10) + 0 + '%';
  } else if (parseInt(scaleValue.value, 10) === SCALE_THREEQUARTERS) {
    scaleValue.value = parseInt(scaleValue.value, 10) + SCALE_QUARTER + '%';
    imgPreview.style.transform = 'scale(1)';
  } else if (parseInt(scaleValue.value, 10) === SCALE_HALF) {
    scaleValue.value = parseInt(scaleValue.value, 10) + SCALE_QUARTER + '%';
    imgPreview.style.transform = 'scale(0.75)';
  } else if (parseInt(scaleValue.value, 10) === SCALE_QUARTER) {
    scaleValue.value = parseInt(scaleValue.value, 10) + SCALE_QUARTER + '%';
    imgPreview.style.transform = 'scale(0.5)';
  } else {
    scaleValue.value = parseInt(scaleValue.value, 10) + SCALE_QUARTER + '%';
  }
};

const scaleSmaller = () => {
  if (parseInt(scaleValue.value, 10) === SCALE_QUARTER) {
    scaleValue.value = parseInt(scaleValue.value, 10) - 0 + '%';
  } else if (parseInt(scaleValue.value, 10) === SCALE_HALF) {
    scaleValue.value = parseInt(scaleValue.value, 10) - SCALE_QUARTER + '%';
    imgPreview.style.transform = 'scale(0.25)';
  } else if (parseInt(scaleValue.value, 10) === SCALE_THREEQUARTERS) {
    scaleValue.value = parseInt(scaleValue.value, 10) - SCALE_QUARTER + '%';
    imgPreview.style.transform = 'scale(0.5)';
  } else if (parseInt(scaleValue.value, 10) === SCALE_FULL) {
    scaleValue.value = parseInt(scaleValue.value, 10) - SCALE_QUARTER + '%';
    imgPreview.style.transform = 'scale(0.75)';
  }
};

export {scaleValue, imgPreview, scaleControlSmaller, scaleSmaller, scaleControlBigger, scaleBigger};
