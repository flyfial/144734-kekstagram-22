/* global _:readonly */
import './util.js';
import './big-pictures.js';
import {hideUploadForm} from './process-img-upload-form.js';
import './scale.js';
import './filters.js';
import {setUserFormSubmit} from './img-upload-form.js';
import {displayGallery} from './pictures.js';
import {getGallery} from './api.js';
import {setDefaultClick, setRandomClick, setDiscussedClick} from './filter-handlers.js';
import './img-preview.js';
import './render-comments.js';

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
