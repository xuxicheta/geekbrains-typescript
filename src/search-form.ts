import { renderBlock } from './lib.js';
import { formatDate, getLastDayOfNextMonth, shiftDate } from './date-utils.js';
const fetch = require('node-fetch')

export interface SearchFormData {
  city: string;
  checkin: Date;
  checkout: Date;
  price: number;
}

// интерфейс для недвижимости
export interface Place {
  id: number;
  image: string;
  name: string;
  description: string;
  remoteness: number;
  bookedDates: number[];
  price: number;
} 

// структура ответа
export interface estateResponse {
  kind: string
  totalItems: number
  items: Place[]
}


// функция для получения недвижимости по переданным фильтрам
export function getEstate(filters: object) {
  return fetch('/api/database.json')
    // нужно как-то отправить запрос на бэк по фильтрам и получить ответ именно согласно фильтрам
    // let response = await request.requestFunctions.sendAsyncRequest("get", `/api/database.json`, {filters}, false)
    .then((response) => {
      return response.text()
    })
    // указываем тип результата
    .then<estateResponse>((responseText: string) => {
      return JSON.parse(responseText)
    })
    .then((data) => {
      if (data.totalItems === 0) {
        throw Error(`There is no available estate.`)
      }
      // возвращаем подходящую недвижимость (массив)
      return data.items
    })
  // не понимаю почему ругается
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

export function renderSearchResultsBlock (places: Place[]): void {
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

function searchItem (value: SearchFormData): void {
  // сюда приходит объект с вбитыми фильтрами для поиска (объект)
  // вызываем функция по поиску и передаем объект
  getEstate(value)
  // функция должна вернуть массив с подходящими домами (data.items)
  .then((places: Place[]) => {
  renderSearchResultsBlock(places)
    // вызываем рендер и передаем полученные данные (массив)
  })
  .catch((error) => {
    console.error(error)
  })

}

const button = document.querySelector('.button')

button.addEventListener('click', (e) => {
  const city = document.getElementById('city')
  const checkin = document.getElementById('check-in-date')
  const checkout = document.getElementById('check-out-date')
  const price = document.getElementById('max-price')
  
  searchItem ({
    'city': city.getAttribute('value'),
    'checkin': new Date (checkin.getAttribute('value')),
    'checkout': new Date (checkout.getAttribute('value')),
    'price': parseInt(price.getAttribute('value'))
  })
  return searchItem;
})


