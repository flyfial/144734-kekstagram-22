const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview').querySelector('img');

scaleValue.value = 100 + '%';

scaleBigger.onclick = () => {
  if (parseInt(scaleValue.value, 10) === 100) {
    scaleValue.value = parseInt(scaleValue.value, 10) + 0 + '%';
  } else if (parseInt(scaleValue.value, 10) === 75) {
    scaleValue.value = parseInt(scaleValue.value, 10) + 25 + '%';
    imgPreview.style.transform = 'scale(1)';
  } else if (parseInt(scaleValue.value, 10) === 50) {
    scaleValue.value = parseInt(scaleValue.value, 10) + 25 + '%';
    imgPreview.style.transform = 'scale(0.75)';
  } else if (parseInt(scaleValue.value, 10) === 25) {
    scaleValue.value = parseInt(scaleValue.value, 10) + 25 + '%';
    imgPreview.style.transform = 'scale(0.5)';
  } else {
    scaleValue.value = parseInt(scaleValue.value, 10) + 25 + '%';
  }
};

scaleSmaller.onclick = () => {
  if (parseInt(scaleValue.value, 10) === 25) {
    scaleValue.value = parseInt(scaleValue.value, 10) - 0 + '%';
  } else if (parseInt(scaleValue.value, 10) === 50) {
    scaleValue.value = parseInt(scaleValue.value, 10) - 25 + '%';
    imgPreview.style.transform = 'scale(0.25)';
  } else if (parseInt(scaleValue.value, 10) === 75) {
    scaleValue.value = parseInt(scaleValue.value, 10) - 25 + '%';
    imgPreview.style.transform = 'scale(0.5)';
  } else if (parseInt(scaleValue.value, 10) === 100) {
    scaleValue.value = parseInt(scaleValue.value, 10) - 25 + '%';
    imgPreview.style.transform = 'scale(0.75)';
  }
};

export {scaleValue, imgPreview};
