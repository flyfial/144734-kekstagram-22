/* global _:readonly */
import {getGallery} from './api.js';
import './big-pictures.js';
import {hideUploadForm} from './form-process.js';
import {setUserFormSubmit} from './form-submission.js';
import {setDefaultClick, setRandomClick, setDiscussedClick} from './gallery-filter-handlers.js';
import './img-filters.js';
import './img-preview.js';
import {displayGallery} from './pictures.js';
import './render-comments.js';
import './scale.js';
import './util.js';

const RERENDER_DELAY = 500;

getGallery((pictures) => {
  displayGallery(pictures);
  setDefaultClick(_.debounce(
    () => displayGallery(pictures),
    RERENDER_DELAY,
  ));
  setRandomClick(_.debounce(
    () => {
      displayGallery(pictures
        .slice()
        .sort(() => 0.5 - Math.random())
        .slice(0, 10));
    },
    RERENDER_DELAY,
  ));
  setDiscussedClick(_.debounce(
    () => {
      displayGallery(pictures
        .slice()
        .sort((a,b) => b.comments.length - a.comments.length));
    },
    RERENDER_DELAY,
  ));
});

setUserFormSubmit(hideUploadForm);
