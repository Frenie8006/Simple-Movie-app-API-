'use strict';

import * as model from './model.js';
import formView from './view.js';

const controlMovie = async function (searchQuery) {
  try {
    // Fetching data to display in landing page
    await model.getAPIRequest();

    // Get search data
    await model.getSearchData(searchQuery);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  formView.searchTitle(controlMovie);
};
init();
