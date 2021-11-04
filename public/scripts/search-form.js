import { renderBlock } from './lib.js';
import { formatDate, getLastDayOfNextMonth, shiftDate } from './date-utils.js';
export function renderSearchFormBlock(dateArrival, dateDeparture) {
    dateArrival = dateArrival || shiftDate(new Date(), 1);
    const arrival = formatDate(dateArrival);
    const departure = formatDate(dateDeparture || shiftDate(dateArrival, 2));
    const now = formatDate(new Date());
    const lastDayOfNextMonth = formatDate(getLastDayOfNextMonth(new Date()));
    renderBlock('search-form-block', `
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
    `);
}
function searchItem(value) {
    console.log(value);
}
const button = document.querySelector('.button');
button.addEventListener('click', (e) => {
    const city = document.getElementById('city');
    const checkin = document.getElementById('check-in-date');
    const checkout = document.getElementById('check-out-date');
    const price = document.getElementById('max-price');
    searchItem({
        'city': city.getAttribute('value'),
        'checkin': new Date(checkin.getAttribute('value')),
        'checkout': new Date(checkout.getAttribute('value')),
        'price': parseInt(price.getAttribute('value'))
    });
    return searchItem;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsVUFBVSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUy9FLE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsV0FBa0IsRUFDbEIsYUFBb0I7SUFFcEIsV0FBVyxHQUFHLFdBQVcsSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNyRCxNQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLGFBQWEsSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekUsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNuQyxNQUFNLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV6RSxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7OzsyREFpQnVELE9BQU8sVUFBVSxHQUFHLFVBQVUsa0JBQWtCOzs7OzREQUkvQyxTQUFTLFVBQVUsT0FBTyxVQUFVLGtCQUFrQjs7Ozs7Ozs7Ozs7O0tBWTdHLENBQ0YsQ0FBQTtBQUNILENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBRSxLQUFxQjtJQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3BCLENBQUM7QUFFRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBRWhELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUNyQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzVDLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDeEQsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBQzFELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7SUFFbEQsVUFBVSxDQUFFO1FBQ1YsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ2xDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBRSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25ELFVBQVUsRUFBRSxJQUFJLElBQUksQ0FBRSxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMvQyxDQUFDLENBQUE7SUFDRixPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZ2V0TGFzdERheU9mTmV4dE1vbnRoLCBzaGlmdERhdGUgfSBmcm9tICcuL2RhdGUtdXRpbHMuanMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlYXJjaEZvcm1EYXRhIHtcbiAgY2l0eTogc3RyaW5nO1xuICBjaGVja2luOiBEYXRlO1xuICBjaGVja291dDogRGF0ZTtcbiAgcHJpY2U6IG51bWJlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhcbiAgZGF0ZUFycml2YWw/OiBEYXRlLFxuICBkYXRlRGVwYXJ0dXJlPzogRGF0ZVxuKTogdm9pZCB7XG4gIGRhdGVBcnJpdmFsID0gZGF0ZUFycml2YWwgfHwgc2hpZnREYXRlKG5ldyBEYXRlKCksIDEpXG4gIGNvbnN0IGFycml2YWwgPSBmb3JtYXREYXRlKGRhdGVBcnJpdmFsKTtcbiAgY29uc3QgZGVwYXJ0dXJlID0gZm9ybWF0RGF0ZShkYXRlRGVwYXJ0dXJlIHx8IHNoaWZ0RGF0ZShkYXRlQXJyaXZhbCwgMikpO1xuICBjb25zdCBub3cgPSBmb3JtYXREYXRlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBsYXN0RGF5T2ZOZXh0TW9udGggPSBmb3JtYXREYXRlKGdldExhc3REYXlPZk5leHRNb250aChuZXcgRGF0ZSgpKSk7XG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcbiAgICBgXG4gICAgPGZvcm0+XG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2Fycml2YWx9XCIgbWluPVwiJHtub3d9XCIgbWF4PVwiJHtsYXN0RGF5T2ZOZXh0TW9udGh9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtkZXBhcnR1cmV9XCIgbWluPVwiJHthcnJpdmFsfVwiIG1heD1cIiR7bGFzdERheU9mTmV4dE1vbnRofVwiIG5hbWU9XCJjaGVja291dFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj7QnNCw0LrRgS4g0YbQtdC90LAg0YHRg9GC0L7QujwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PjxidXR0b24gY2xhc3M9XCJidXR0b25cIj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApXG59XG5cbmZ1bmN0aW9uIHNlYXJjaEl0ZW0gKHZhbHVlOiBTZWFyY2hGb3JtRGF0YSk6IHZvaWQge1xuICBjb25zb2xlLmxvZyh2YWx1ZSlcbn1cblxuY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbicpXG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpXG4gIGNvbnN0IGNoZWNraW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2staW4tZGF0ZScpXG4gIGNvbnN0IGNoZWNrb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrLW91dC1kYXRlJylcbiAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4LXByaWNlJylcbiAgXG4gIHNlYXJjaEl0ZW0gKHtcbiAgICAnY2l0eSc6IGNpdHkuZ2V0QXR0cmlidXRlKCd2YWx1ZScpLFxuICAgICdjaGVja2luJzogbmV3IERhdGUgKGNoZWNraW4uZ2V0QXR0cmlidXRlKCd2YWx1ZScpKSxcbiAgICAnY2hlY2tvdXQnOiBuZXcgRGF0ZSAoY2hlY2tvdXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKSxcbiAgICAncHJpY2UnOiBwYXJzZUludChwcmljZS5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpXG4gIH0pXG4gIHJldHVybiBzZWFyY2hJdGVtO1xufSlcblxuXG4iXX0=