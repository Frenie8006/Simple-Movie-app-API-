'use strict';

import * as model from './model.js';
import formView from './searchView.js';
import showMovies from './displayMovies.js';

const controlMovie = async function (searchQuery) {
  try {
    // Fetching data to display in landing page
    await model.getAPIRequest();

    // Get search data
    const data = await model.getSearchData(searchQuery);

    // Display initial movies element
    // showMovies.displayInitialMovies();

    // Search movie names
    showMovies.displayMovie(data);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  formView.searchTitle(controlMovie);
};
init();
