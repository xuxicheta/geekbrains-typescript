import { renderBlock } from './lib.js';
import { formatDate, getLastDayOfNextMonth, shiftDate } from './date-utils.js';

export interface SearchFormData {
  city: string;
  checkin: Date;
  checkout: Date;
  price: number;
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

function searchItem (value: SearchFormData): void {
  console.log(value)
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


