'use strict';

import * as model from './model.js';
import formView from './searchView.js';
import showMovies from './displayMovies.js';

const controlInitialDiplay = async function () {
  try {
    // Fetching data to display in landing page
    const movieAPI = await model.getAPIRequest();

    // Display initial movies element
    showMovies.displayInitialMovies(movieAPI);
  } catch (err) {
    console.error(err);
  }
};

const controlMovie = async function (searchQuery) {
  try {
    // Get search data
    const data = await model.getSearchData(searchQuery);

    // Search movie titles
    showMovies.displayMovie(data);

    // Search error message
    showMovies.displayErrorMessage(data);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  controlInitialDiplay();
  formView.searchTitle(controlMovie);
};
init();
