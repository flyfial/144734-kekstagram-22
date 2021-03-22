/* global _:readonly */
import {getGallery} from './api.js';
import './big-pictures.js';
import {setUploadFileControl} from './form-process.js';
import {TabName, activateTab} from './gallery-filter-handlers.js';
import './img-filters.js';
import './img-preview.js';
import {displayGallery} from './pictures.js';
import './render-comments.js';
import './scale.js';
import './util.js';

const RERENDER_DELAY = 500;

getGallery((pictures) => {
  displayGallery(pictures);
  activateTab(TabName.DEFAULT, _.debounce(
    () => displayGallery(pictures),
    RERENDER_DELAY,
  ));
  activateTab(TabName.RANDOM, _.debounce(
    () => {
      displayGallery(pictures
        .slice()
        .sort(() => 0.5 - Math.random())
        .slice(0, 10));
    },
    RERENDER_DELAY,
  ));
  activateTab(TabName.DISCUSSED, _.debounce(
    () => {
      displayGallery(pictures
        .slice()
        .sort((a,b) => b.comments.length - a.comments.length));
    },
    RERENDER_DELAY,
  ));
});

setUploadFileControl();
