import {isEscEvent} from './util.js';
import {body} from './data.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onModalEscKeydown);
};

const onModalEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

const showBigPicture = (pictureNode, picture) => () => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPicture.querySelector('img').src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = pictureNode.querySelector('.picture__likes').textContent;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  bigPicture.querySelector('.comments-count').textContent = pictureNode.querySelector('.picture__comments').textContent;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  document.addEventListener('keydown', onModalEscKeydown);
};

const processPictures = (picturesList) => {
  const pictureNodes = document.querySelectorAll('.picture');

  console.log(picturesList);

  pictureNodes.forEach ((pictureNode) => {
    const picture = picturesList.find((photo) => {
      return window.location.origin + '/' + photo.url === pictureNode.querySelector('img').src;
    });
    pictureNode.addEventListener('click', showBigPicture(pictureNode, picture));

    bigPictureCancel.addEventListener('click', hideBigPicture);
  });
}

export {processPictures};
