//import {similarPhotoDescriptions} from './util.js';
import {processPictures} from './big-pictures.js';

const otherUsersPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

export let picturesData = [];

const displayGallery = (photos) => {
  const picturesBlock = document.createDocumentFragment();

  photos.forEach(({url, comments, likes}) => {
    const otherUserPicture = pictureTemplate.cloneNode(true);
    otherUserPicture.querySelector('.picture__img').src = url;
    otherUserPicture.querySelector('.picture__comments').textContent = comments.length;
    otherUserPicture.querySelector('.picture__likes').textContent = likes;
    picturesBlock.appendChild(otherUserPicture);
  });

  otherUsersPictures.appendChild(picturesBlock);
  processPictures();
  picturesData = photos;
};

export {displayGallery};
