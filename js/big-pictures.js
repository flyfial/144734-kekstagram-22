import {picturesData} from './pictures.js';
import {isEscEvent} from './util.js';
import {body} from './data.js';

const processPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

  pictures.forEach ((picture) => {
    const onModalEscKeydown = (evt) => {
      if (isEscEvent(evt)) {
        evt.preventDefault();
        hideBigPicture();
      }
    };

    const showBigPicture = () => {
      bigPicture.classList.remove('hidden');
      body.classList.add('modal-open');

      const pictureInfo = picturesData.find((photo) => {
        return window.location.origin + '/' + photo.url === picture.querySelector('img').src;
      });

      bigPicture.querySelector('img').src = pictureInfo.url;
      bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
      bigPicture.querySelector('.social__comment-count').classList.add('hidden');
      bigPicture.querySelector('.comments-loader').classList.add('hidden');
      bigPicture.querySelector('.comments-count').textContent = picture.querySelector('.picture__comments').textContent;
      bigPicture.querySelector('.social__caption').textContent = pictureInfo.description;

      document.addEventListener('keydown', onModalEscKeydown);
    };

    const hideBigPicture = () => {
      bigPicture.classList.add('hidden');
      body.classList.remove('modal-open');

      document.removeEventListener('keydown', onModalEscKeydown);
    };

    picture.addEventListener('click', showBigPicture);

    bigPictureCancel.addEventListener('click', hideBigPicture);
  });
}

export {processPictures};
