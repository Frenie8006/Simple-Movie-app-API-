import { SEARCH_API } from './config.js';

class FormView {
  _form = document.getElementById('form');
  _search = document.getElementById('search');

  searchTitle(handler) {
    this._form.addEventListener('submit', e => {
      e.preventDefault();

      const searchTerm = this._search.value;

      if (searchTerm && searchTerm !== '') {
        handler(SEARCH_API + searchTerm);
        this._search.value = '';
      }
    });
  }
}
export default new FormView();
