import { renderBlock, clearBlockOreClouseToasts } from './lib.js';
export function renderSearchStubBlock() {
    clearBlockOreClouseToasts('search-results-block');
    renderBlock('search-results-block', `
    <div class="before-results-block" id="before-results-block">
      <img src="img/start-search.png" />
      <p>Чтобы начать поиск, заполните форму и&nbsp;нажмите "Найти"</p>
    </div>
    `);
}
export function renderEmptyOrErrorSearchBlock(reasonMessage) {
    clearBlockOreClouseToasts('results-list');
    renderBlock('results-list', `
    <li class="result">
      <div class="no-results-block">
        <img src="img/no-results.png" />
        <p>${reasonMessage}</p>
      </div>
    </li>
    `);
}
export function renderSearchResultsBlock() {
    clearBlockOreClouseToasts('search-results-block');
    renderBlock('search-results-block', `
    <div class="search-results-header">
        <p>Результаты поиска</p>
        <div class="search-results-filter">
            <span><i class="icon icon-filter"></i> Сортировать:</span>
            <select>
                <option selected="">Сначала дешёвые</option>
                <option selected="">Сначала дорогие</option>
                <option>Сначала ближе</option>
            </select>
        </div>
    </div>
    <ul class="results-list" id="results-list">
    </ul>
    `);
}
export function renderSerchResults(element) {
    const { id, name, price, remoteness, description } = element;
    renderBlock('results-list', `
    <li class="result">
    <div class="result-container">
      <div class="result-img-container">
        <div class="favorites" id="${id}"></div>
        <img class="result-img" src="./img/result-${Math.floor(Math.random() * 2) + 1}.png" alt="">
      </div>
      <div class="result-info">
        <div class="result-info--header">
          <p>${name}</p>
          <p class="price">${price}&#8381;</p>
        </div>
        <div class="result-info--map"><i class="map-icon"></i> ${remoteness}км от вас</div>
        <div class="result-info--descr">${description}</div>
        <div class="result-info--footer">
          <div>
            <button id="${id}">Забронировать</button>
          </div>
        </div>
      </div>
    </div>
  </li>
  `);
}
