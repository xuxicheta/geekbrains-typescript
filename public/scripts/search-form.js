import { renderBlock, clearBlockOreClouseToasts } from './lib.js';
import bucingElement from './bucing-element.js';
import { formatDate, getLastDayOfNextMonth, shiftDate } from './date-utils.js';
import { renderSearchResultsBlock, renderSerchResults, renderEmptyOrErrorSearchBlock } from './search-results.js';
export function renderSearchFormBlock(dateArrival, dateDeparture) {
    const STATE = {
        response: [],
        renderFilter: null,
        emptyList: null
    };
    dateArrival = dateArrival || shiftDate(new Date(), 1);
    const arrival = formatDate(dateArrival);
    const departure = formatDate(dateDeparture || shiftDate(dateArrival, 2));
    const now = formatDate(new Date());
    const lastDayOfNextMonth = formatDate(getLastDayOfNextMonth(new Date()));
    clearBlockOreClouseToasts('search-form-block');
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!-- <div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div> -->
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${arrival}" min="${now}" max="${lastDayOfNextMonth}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${departure}" min="${arrival}" max="${lastDayOfNextMonth}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="number" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button id="serchBTN">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
    let cityValue;
    let formDateArrivalValue;
    let formDateDepartureValue;
    let priceValue;
    const staticcity = document.getElementById('city').value;
    const staticformDateArrival = document.getElementById('check-in-date').value;
    const staticformDateDeparture = document.getElementById('check-out-date').value;
    const staticprice = Number(document.getElementById('max-price').value);
    const city = document.getElementById('city');
    const formDateArrival = document.getElementById('check-in-date');
    const formDateDeparture = document.getElementById('check-out-date');
    const price = document.getElementById('max-price');
    const serchBTN = document.getElementById('serchBTN');
    const staticSrechData = {
        staticprice,
        staticformDateArrival,
        staticformDateDeparture,
        staticcity,
    };
    if (serchBTN != null) {
        serchBTN.onclick = function (event) {
            event.preventDefault();
            search(searchFormData(staticSrechData));
        };
    }
    price.addEventListener('input', () => {
        searchFormData(staticSrechData);
    });
    formDateDeparture.addEventListener('input', () => {
        searchFormData(staticSrechData);
    });
    formDateArrival.addEventListener('input', () => {
        searchFormData(staticSrechData);
    });
    city.addEventListener('input', () => {
        searchFormData(staticSrechData);
    });
    function searchFormData(staticDataSerch) {
        const { staticcity, staticformDateArrival, staticformDateDeparture, staticprice } = staticDataSerch;
        price.onchange = () => {
            priceValue = Number(price.value);
        };
        formDateDeparture.onchange = () => {
            formDateDepartureValue = formDateDeparture.value;
        };
        formDateArrival.onchange = () => {
            formDateArrivalValue = formDateArrival.value;
        };
        city.onchange = () => {
            cityValue = city.value;
        };
        const serchData = {
            price: priceValue || staticprice,
            dateIn: formDateArrivalValue || staticformDateArrival,
            dateOut: formDateDepartureValue || staticformDateDeparture,
            city: cityValue || staticcity,
        };
        return serchData;
    }
    function search(serchData) {
        const { price, dateIn, dateOut, city } = serchData;
        console.log('serch', price, dateIn, dateOut, city);
        fetch('http://localhost:3000/places')
            .then(response => response.json())
            .then(r => {
            if (r && !STATE.response.length) {
                console.log('r', r);
                for (const el in r) {
                    if (Object.prototype.hasOwnProperty.call(r, el)) {
                        const element = r[el];
                        STATE.response.unshift(element);
                    }
                }
            }
            if (STATE.response && !STATE.renderFilter) {
                STATE.renderFilter = true;
                renderSearchResultsBlock();
            }
            if (price > 0 && STATE.response.length) {
                clearBlockOreClouseToasts('results-list');
                if (STATE.emptyList) {
                    clearBlockOreClouseToasts('results-list');
                }
                STATE.response.forEach(el => {
                    renderSerchResults(el);
                });
                STATE.emptyList = false;
                bucingElement();
            }
            if (price === 0) {
                STATE.emptyList = true;
                clearBlockOreClouseToasts('results-list');
                renderEmptyOrErrorSearchBlock('Ничего не найдено');
            }
        });
    }
}
