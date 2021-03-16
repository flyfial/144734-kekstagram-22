const body = document.querySelector('body');
const main = document.querySelector('main');
const alertSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const alertErrorTemplate = document.querySelector('#error').content.querySelector('.error');

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isEnterEvent = (evt) => {
  return evt.key === 'Enter';
};

const findSuccessButton = () => {
  const successButton = main.querySelector('.success__button');
  return successButton;
};

const findErrorButton = () => {
  const errorButton = main.querySelector('.error__button');
  return errorButton;
};

const hideSuccessMessage = () => {
  body.classList.remove('modal-open');

  findSuccessButton().removeEventListener('click', hideSuccessMessage);
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
  document.removeEventListener('mouseup', onSuccessMessageMouseUp);

  main.querySelector('.success').remove();
};

const hideErrorMessage = () => {
  body.classList.remove('modal-open');

  findErrorButton().removeEventListener('click', hideErrorMessage);
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
  document.removeEventListener('mouseup', onErrorMessageMouseUp);

  main.querySelector('.error').remove();
};

const onSuccessMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideSuccessMessage();
  }
};

const onErrorMessageEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    hideErrorMessage();
  }
};

const onSuccessMessageMouseUp = (evt) => {
  if (evt.target !== main.querySelector('.success__inner')) {
    hideSuccessMessage();
  }
};

const onErrorMessageMouseUp = (evt) => {
  if (evt.target !== main.querySelector('.error__inner')) {
    hideErrorMessage();
  }
};

const showSuccessMessage = () => {
  const alertBox = document.createDocumentFragment();
  const successSection = alertSuccessTemplate.cloneNode(true);
  alertBox.appendChild(successSection);
  main.appendChild(alertBox);

  body.classList.add('modal-open');

  findSuccessButton().addEventListener('click', hideSuccessMessage);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
  document.addEventListener('mouseup', onSuccessMessageMouseUp);
};

const showErrorMessage = () => {
  const alertBox = document.createDocumentFragment();
  const errorSection = alertErrorTemplate.cloneNode(true);
  alertBox.appendChild(errorSection);
  main.appendChild(alertBox);

  body.classList.add('modal-open');

  findErrorButton().addEventListener('click', hideErrorMessage);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
  document.addEventListener('mouseup', onErrorMessageMouseUp);
};

export {body, showSuccessMessage, showErrorMessage, isEnterEvent, isEscEvent};
