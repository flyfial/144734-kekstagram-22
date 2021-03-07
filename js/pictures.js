import {processPictures} from './big-pictures.js';

const otherUsersPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const displayGallery = (photos) => {
  const picturesBlock = document.createDocumentFragment();

  photos
    .slice()
    .forEach(({url, comments, likes}) => {
      const otherUserPicture = pictureTemplate.cloneNode(true);
      otherUserPicture.querySelector('.picture__img').src = url;
      otherUserPicture.querySelector('.picture__comments').textContent = comments.length;
      otherUserPicture.querySelector('.picture__likes').textContent = likes;
      picturesBlock.appendChild(otherUserPicture);
    });

  const pictureNodes = document.querySelectorAll('.picture');
  pictureNodes.forEach((pictureNode) => {
    pictureNode.remove();
  })
  otherUsersPictures.appendChild(picturesBlock);
  processPictures(photos);
};

export {displayGallery};
