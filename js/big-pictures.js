import {userPictures} from './pictures.js';

const pictures = document.querySelectorAll('.picture');
const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const body = document.querySelector('body');

pictures.forEach ((picture) => {
  picture.addEventListener('click', () => {
    bigPicture.classList.remove('hidden');
    body.classList.add('modal-open');
    bigPicture.querySelector('img').src = picture.querySelector('img').src;
    bigPicture.querySelector('.likes-count').textContent = picture.querySelector('.picture__likes').textContent;
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');
    bigPicture.querySelector('.comments-count').textContent = picture.querySelector('.picture__comments').textContent;
    userPictures.forEach ((userPicture) => {
      bigPicture.querySelector('.social__caption').textContent = userPicture.description;
    });

    let commentBtn = document.querySelector('.social__footer-btn');
    let commentList = document.querySelector('.social__comments');
    let commentField = document.querySelector('.social__footer-text');

    commentBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      let newComment = document.createElement('li');
      newComment.classList.add('social__comment');

      let newCommentImg = document.createElement('img');
      newCommentImg.classList.add('social__picture');
      newCommentImg.src = bigPicture.querySelector('.social__footer').querySelector('.social__picture').src;
      newCommentImg.alt = 'имя комментатора';
      newCommentImg.width = 35;
      newCommentImg.height = 35;
      newComment.appendChild(newCommentImg);

      let newCommentText = document.createElement('p');
      newCommentText.classList.add('social__text');
      newComment.appendChild(newCommentText);
      newCommentText.textContent = commentField.value;
      commentField.value = '';

      commentList.append(newComment);
    })
  }),

  bigPictureCancel.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  })
});
