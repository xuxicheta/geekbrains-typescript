import { Place } from '../../domain/place.js'
import { Provider } from '../../domain/provider.js'
import { SearchFilter } from '../../domain/search-filter.js'
import { HttpHelper } from '../../utils/http-helper.js'
import { PlaceResponse, PlaceListResponse, Place as apiPlace } from './response.js'

export class apiProvider implements Provider {
  // имя провайдера нужно, чтобы было возможно установить источник того или иного экземпляра места
  public static provider = 'api'
  private static apiUrl = 'https://fake-api.provider1.ru/v1'

  public find(filter: SearchFilter): Promise<Place[]> {
    return HttpHelper.fetchAsJson<PlaceListResponse>(
        apiProvider.apiUrl + '/place?' +
      // создадим соответствующую строку запроса из объекта фильтра
      this.convertFilterToQueryString(filter)
    )
      .then((response) => {
        // проверим, что ответ корректный
        this.assertIsValidResponse(response)
        // сконвертируем JSON-ответ в экземпляры Place
        return this.convertPlaceListResponse(response)
      })
  }

  public getById(id: string): Promise<Place> {
    return HttpHelper.fetchAsJson<PlaceResponse>(apiProvider.apiUrl + '/place/' + id)
      .then((response) => {
        // проверим, что ответ корректный
        this.assertIsValidResponse(response)
        // сконвертируем JSON-ответ в экземпляр Place
        return this.convertPlaceListResponse(response.item)
      })
  }

  /**
   * Данный провайдер не использует http коды для ответов
   * В случае ошибки, она содержится в errorMessage
   * Необходимо убедиться, что ответ не является ошибкой
   */
  private assertIsValidResponse(response: PlaceListResponse | PlaceResponse): void {
    if (response.errorMessage != null) {
      throw new Error(response.errorMessage)
    }
  }

    /**
   * Необходимо написать логику преобразования общего фильтра
   * в get-параметры текущего источника
   */
     private convertFilterToQueryString(filter: SearchFilter): string {
        return `search=${filter.name}` +
          `&city=${filter.city}`
      }

    // Так же для остальных фильтров


      /**
   * Проходимся по каждому объекту и конвертируем его в экземпляр Place
   */
  private convertPlaceListResponse(response: PlaceListResponse): Place[] {
    return response.items.map((item) => {
      return this.convertPlaceResponse(item)
    })
  }

  /**
   * Здесь находится логика преобразования объекта места из источника
   * в экземпляр Place нашего приложения
   */
  private convertPlaceResponse(item: apiPlace): Place {
    return new Place(
        apiProvider.provider,
      item.id,
      item.image,
      item.name,
      item.description,
      item.remoteness,
      item.bookedDates,
      item.price,
      item.photos,
      item.coordinates,
    )
  }
}