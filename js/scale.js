const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

scaleValue.value = 100;

scaleBigger.onclick = function () {
  if (scaleValue.value == 100) {
    scaleValue.value = Number(scaleValue.value) + 0;
  } else if (scaleValue.value == 75) {
    scaleValue.value = Number(scaleValue.value) + 25;
    imgPreview.style.transform = 'scale(1)';
  } else if (scaleValue.value == 50) {
    scaleValue.value = Number(scaleValue.value) + 25;
    imgPreview.style.transform = 'scale(0.75)';
  } else if (scaleValue.value == 25) {
    scaleValue.value = Number(scaleValue.value) + 25;
    imgPreview.style.transform = 'scale(0.5)';
  } else {
    scaleValue.value = Number(scaleValue.value) + 25;
  }
};

scaleSmaller.onclick = function () {
  if (scaleValue.value == 25) {
    scaleValue.value = Number(scaleValue.value) - 0;
  } else if (scaleValue.value == 50) {
    scaleValue.value = Number(scaleValue.value) - 25;
    imgPreview.style.transform = 'scale(0.25)';
  } else if (scaleValue.value == 75) {
    scaleValue.value = Number(scaleValue.value) - 25;
    imgPreview.style.transform = 'scale(0.5)';
  } else if (scaleValue.value == 100) {
    scaleValue.value = Number(scaleValue.value) - 25;
    imgPreview.style.transform = 'scale(0.75)';
  }
};

export {scaleValue, imgPreview};
