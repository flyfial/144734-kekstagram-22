import {similarPhotoDescriptions} from './util.js';

const otherUsersPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const userPictures = similarPhotoDescriptions;

const picturesBlock = document.createDocumentFragment();

userPictures.forEach(({url, comments, likes}) => {
  const otherUserPicture = pictureTemplate.cloneNode(true);
  otherUserPicture.querySelector('.picture__img').src = url;
  otherUserPicture.querySelector('.picture__comments').textContent = comments.length;
  otherUserPicture.querySelector('.picture__likes').textContent = likes;
  picturesBlock.appendChild(otherUserPicture);
});

otherUsersPictures.appendChild(picturesBlock);

export {userPictures};
