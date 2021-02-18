import {userPictures} from './pictures.js';
import {isEscEvent} from './util.js';

const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

pictures.forEach ((picture) => {
  picture.addEventListener('click', () => {
    showBigPicture()
  });

  bigPictureCancel.addEventListener('click', () => {
    hideBigPicture();
  });

  const onModalEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      hideBigPicture();
    }
  };

  const showBigPicture = () => {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');

    const pictureData = userPictures.find((userPicture) => {
      return window.location.origin + '/' + userPicture.url === picture.querySelector('img').src;
    });

    bigPicture.querySelector('img').src = pictureData.url;
    bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    bigPicture.querySelector('.comments-count').textContent = picture.querySelector('.picture__comments').textContent;
    bigPicture.querySelector('.social__caption').textContent = pictureData.description;

    document.addEventListener('keydown', onModalEscKeydown);
  };

  const hideBigPicture = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onModalEscKeydown);
  };
});
