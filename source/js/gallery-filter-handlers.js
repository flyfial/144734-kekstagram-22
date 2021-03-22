const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const filterNodes = [filterDefault, filterRandom, filterDiscussed];

const TabName = {
  DEFAULT: 'DEFAULT',
  RANDOM: 'RANDOM',
  DISCUSSED: 'DISCUSSED',
};

const Tab = {
  [TabName.DEFAULT]: filterDefault,
  [TabName.RANDOM]: filterRandom,
  [TabName.DISCUSSED]: filterDiscussed,
};

const activateFilter = (filter) => {
  const otherFilters = filterNodes.filter((node) => node.id !== filter.id);
  otherFilters.forEach((otherFilter) => {
    if (otherFilter.classList.contains('img-filters__button--active')) {
      otherFilter.classList.remove('img-filters__button--active');
    }
  });
  filter.classList.add('img-filters__button--active');
};

const activateTab = (tabName, cb) => {
  const filterNode = Tab[tabName];
  filterNode.addEventListener('click', () => {
    activateFilter(filterNode);
    cb();
  });
};

export {TabName, activateTab};
