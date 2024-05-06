import { API_KEY } from './config.js';
import { getAJAX } from './helpers.js';

export const getAPIRequest = async function () {
  try {
    const data = await getAJAX(API_KEY);

    return data;
  } catch (err) {
    throw err;
  }
};

export const getSearchData = async function (searchQ) {
  try {
    const data = await getAJAX(searchQ);

    const uniqueData = data.results.map(result => {
      return {
        title: result.title,
        posterPath: result.poster_path,
        voteAverage: result.vote_average,
        overview: result.overview,
      };
    });
    return uniqueData;
  } catch (err) {
    throw err;
  }
};
