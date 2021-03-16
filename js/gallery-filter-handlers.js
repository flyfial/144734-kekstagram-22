const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const setDefaultClick = (cb) => {
  filterDefault.addEventListener('click', () => {
    if (filterRandom.classList.contains('img-filters__button--active') || filterDiscussed.classList.contains('img-filters__button--active')) {
      filterRandom.classList.remove('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
    }
    filterDefault.classList.add('img-filters__button--active');

    cb();
  });
};

const setRandomClick = (cb) => {
  filterRandom.addEventListener('click', () => {
    if (filterDefault.classList.contains('img-filters__button--active') || filterDiscussed.classList.contains('img-filters__button--active')) {
      filterDefault.classList.remove('img-filters__button--active');
      filterDiscussed.classList.remove('img-filters__button--active');
    }
    filterRandom.classList.add('img-filters__button--active');

    cb();
  });
};

const setDiscussedClick = (cb) => {
  filterDiscussed.addEventListener('click', () => {
    if (filterDefault.classList.contains('img-filters__button--active') || filterRandom.classList.contains('img-filters__button--active')) {
      filterDefault.classList.remove('img-filters__button--active');
      filterRandom.classList.remove('img-filters__button--active');
    }
    filterDiscussed.classList.add('img-filters__button--active');

    cb();
  });
}

export {setDefaultClick, setRandomClick, setDiscussedClick};
