import { IMG_PATH } from './config.js';

class ShowMovies {
  _section = document.querySelector('.section-movie');

  _movies(movies) {
    const movieData = movies.results.map(result => {
      return {
        title: result.title,
        posterPath: result.poster_path,
        voteAverage: result.vote_average,
        overview: result.overview,
      };
    });

    movieData.forEach(movie => {
      const movieEl = document.createElement('div');
      movieEl.classList.add('movie');

      movieEl.innerHTML = `
        <img
          class="movie__img"
          src="${IMG_PATH + movie.posterPath}"
          alt="${movie.title}"
        />
        <div class="movie__info">
          <h2 class="movie__info__title">${movie.title}</h2>
          <span class="movie__info__rating ${this._getClassByRate(
            movie.voteAverage
          )}">${movie.voteAverage.toFixed(1)}</span>
        </div>
        <div class="movie__overview">
          <h3 class="movie__overview__heading">Overview</h3>
          <p class="movie__overview__text">
            ${movie.overview}
          </p>
        </div>  
      `;
      this._section.appendChild(movieEl);
    });
  }

  displayMovie(movies) {
    this._section.innerHTML = '';
    this._movies(movies);
  }

  displayInitialMovies(movies) {
    this._movies(movies);
  }

  displayErrorMessage(movies) {
    if (movies.results.length === 0) {
      this._section.innerHTML = '';

      const errorMesage = document.createElement('span');
      errorMesage.classList.add('message');

      errorMesage.innerHTML = `<span class="message">Title not found. Please try again!</span>`;
      this._section.appendChild(errorMesage);
    }
  }

  _getClassByRate(vote) {
    if (vote >= 8) return 'green';
    if (vote >= 5) return 'orange';
    if (vote >= 1) return 'red';
  }
}
export default new ShowMovies();
