import {body, isEscEvent, commentList} from './util.js';
import {createComment} from './render-comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const displayinCountNode = commentCount.querySelector('#displayed-count');
//const totalCountNode = commentCount.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const DEFAULT_COMMENT_NUMBER = 5;
let displayingComments = DEFAULT_COMMENT_NUMBER;
let currentPicture = null;

const showMoreCommentsHandler = () => {
  displayingComments += DEFAULT_COMMENT_NUMBER;
  showComments(displayingComments - DEFAULT_COMMENT_NUMBER);
};

const showComments = (start = 0) => {
  if (currentPicture.comments.length <= displayingComments) {
    commentsLoader.classList.add('hidden');
    displayinCountNode.textContent = currentPicture.comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
    displayinCountNode.textContent = displayingComments;
  }

  currentPicture.comments
    .slice(start, displayingComments)
    .forEach((comment) => {
      const commentItem = createComment(comment);
      commentList.appendChild(commentItem);
    });
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  currentPicture = null;
  displayingComments = DEFAULT_COMMENT_NUMBER;
  commentList.innerHTML = '';

  commentsLoader.removeEventListener('click', showMoreCommentsHandler);
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
  bigPicture.querySelector('.comments-count').textContent = pictureNode.querySelector('.picture__comments').textContent;
  bigPicture.querySelector('.social__caption').textContent = picture.description;

  currentPicture = picture;
  showComments();
  commentsLoader.addEventListener('click', showMoreCommentsHandler);

  document.addEventListener('keydown', onModalEscKeydown);
};

const processPictures = (picturesList) => {
  const pictureNodes = document.querySelectorAll('.picture');

  pictureNodes.forEach ((pictureNode) => {
    const picture = picturesList.find((photo) => {
      return window.location.origin + '/' + photo.url === pictureNode.querySelector('img').src;
    });

    pictureNode.addEventListener('click', showBigPicture(pictureNode, picture));

    bigPictureCancel.addEventListener('click', hideBigPicture);
  });
}

export {processPictures};
