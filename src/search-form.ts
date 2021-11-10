import { renderBlock } from './lib.js';
import { formatDate, getLastDayOfNextMonth, shiftDate } from './date-utils.js';
const fetch = require('node-fetch')
import { Place } from './domain/place.js'
import { SearchFilter } from './domain/search-filter.js'
import { apiProvider } from './providers/api/api-provider.js'
import { sdkProvider } from './providers/sdk/sdk-provider.js'

const api = new apiProvider()
const sdk = new sdkProvider()


// функция для получения недвижимости по переданным фильтрам по единому протоколу
export function getEstate(filters: object) {
  Promise.all([
    api.find(filters),
    sdk.find(filters)
  ]).then((results) => {
    // мерджим все результаты в один
    const allResults: Place[] = [].concat(results[0], results[1])
    // работаем с ними как с единым целым
    allResults.sort(sortByPrice)
    renderSearchResultsBlock(allResults)
  })
}

export function renderSearchFormBlock(
  dateArrival?: Date,
  dateDeparture?: Date
): void {
  dateArrival = dateArrival || shiftDate(new Date(), 1)
  const arrival = formatDate(dateArrival);
  const departure = formatDate(dateDeparture || shiftDate(dateArrival, 2));
  const now = formatDate(new Date());
  const lastDayOfNextMonth = formatDate(getLastDayOfNextMonth(new Date()));

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
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
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button class="button">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}

export function renderSearchResultsBlock (_places: Place[]): void {
  // тут в верске должен был какой-то цикл, отрисовывающий подряд пришедшие данные (массив data.items)
  renderBlock(
    'search-results-block',
    `
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
    <ul class="results-list">
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites active"></div>
            <img class="result-img" src="./img/result-1.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>YARD Residence Apart-hotel</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 2.5км от вас</div>
            <div class="result-info--descr">Комфортный апарт-отель в самом сердце Санкт-Петербрга. К услугам гостей номера с видом на город и бесплатный Wi-Fi.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="result">
        <div class="result-container">
          <div class="result-img-container">
            <div class="favorites"></div>
            <img class="result-img" src="./img/result-2.png" alt="">
          </div>	
          <div class="result-info">
            <div class="result-info--header">
              <p>Akyan St.Petersburg</p>
              <p class="price">13000&#8381;</p>
            </div>
            <div class="result-info--map"><i class="map-icon"></i> 1.1км от вас</div>
            <div class="result-info--descr">Отель Akyan St-Petersburg с бесплатным Wi-Fi на всей территории расположен в историческом здании Санкт-Петербурга.</div>
            <div class="result-info--footer">
              <div>
                <button>Забронировать</button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    `
  )
}

function sortByPrice(one: Place, two: Place) {
  if (one.price > two.price) {
    return 1
  } else if (one.price < two.price) {
    return -1
  } else {
    return 0
  }
}

function searchItem (value: SearchFilter) {
  // сюда приходит объект с вбитыми фильтрами для поиска (объект) - применяется общий фильтр
  // вызываем функция по поиску и передаем объект
  getEstate(value)
}

const button = document.querySelector('.button')

if (button != null) {
  button.addEventListener('click', (e) => {
    const city = document.getElementById('city')
    const checkin = document.getElementById('check-in-date')
    const checkout = document.getElementById('check-out-date')
    const price = document.getElementById('max-price')
    
    if (city != null && checkin != null && checkout != null && price != null){
      searchItem ({
        'city': city.getAttribute('value'),
        'checkin': checkin.getAttribute('value'),
        'checkout': checkout.getAttribute('value'),
        'price': price.getAttribute('value')
      })
    }
    return searchItem;
  })
}




