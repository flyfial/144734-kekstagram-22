import {activateFilters} from './activate-filters.js';

const getGallery = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error (`${response.status} ${response.statusText}`);
    })
    .then((pictures) => {
      onSuccess(pictures);
      activateFilters();
    })
    .catch((err) => {
      alert ('Что-то пошло не так. Вот что считает сервер: ' + err);
    });
}

export {getGallery};
