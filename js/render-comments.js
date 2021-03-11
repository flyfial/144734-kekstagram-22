const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createComment = (comment) => {
  const listComment = makeElement('li', 'social__comment');

  const avatar = makeElement('img', 'social__picture');
  avatar.src = comment.avatar;
  avatar.alt = comment.name;
  avatar.width = '35'
  avatar.height = '35'
  listComment.appendChild(avatar);

  const message = makeElement('p', 'social__text', comment.message);
  listComment.appendChild(message);

  return listComment;
};

export {createComment};
