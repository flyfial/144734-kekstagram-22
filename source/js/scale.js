const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');
const XXV = 25;
const L = 50;
const LXXV = 75;
const C = 100;

scaleValue.value = 100 + '%';

const scaleBigger = () => {
  if (parseInt(scaleValue.value, 10) === C) {
    scaleValue.value = parseInt(scaleValue.value, 10) + 0 + '%';
  } else if (parseInt(scaleValue.value, 10) === LXXV) {
    scaleValue.value = parseInt(scaleValue.value, 10) + XXV + '%';
    imgPreview.style.transform = 'scale(1)';
  } else if (parseInt(scaleValue.value, 10) === L) {
    scaleValue.value = parseInt(scaleValue.value, 10) + XXV + '%';
    imgPreview.style.transform = 'scale(0.75)';
  } else if (parseInt(scaleValue.value, 10) === XXV) {
    scaleValue.value = parseInt(scaleValue.value, 10) + XXV + '%';
    imgPreview.style.transform = 'scale(0.5)';
  } else {
    scaleValue.value = parseInt(scaleValue.value, 10) + XXV + '%';
  }
};

const scaleSmaller = () => {
  if (parseInt(scaleValue.value, 10) === XXV) {
    scaleValue.value = parseInt(scaleValue.value, 10) - 0 + '%';
  } else if (parseInt(scaleValue.value, 10) === L) {
    scaleValue.value = parseInt(scaleValue.value, 10) - XXV + '%';
    imgPreview.style.transform = 'scale(0.25)';
  } else if (parseInt(scaleValue.value, 10) === LXXV) {
    scaleValue.value = parseInt(scaleValue.value, 10) - XXV + '%';
    imgPreview.style.transform = 'scale(0.5)';
  } else if (parseInt(scaleValue.value, 10) === C) {
    scaleValue.value = parseInt(scaleValue.value, 10) - XXV + '%';
    imgPreview.style.transform = 'scale(0.75)';
  }
};

export {scaleValue, imgPreview, scaleControlSmaller, scaleSmaller, scaleControlBigger, scaleBigger};
