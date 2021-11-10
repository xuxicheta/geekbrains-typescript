import { Place } from './search-formook.js'
import { SearchFilter } from './search-form.js'

export interface Provider {
// Источник получает фильтр в общем виде и преобразовывает его в свой формат, преобразует свой ответ в объекты отеля/квартиры

  find(filter: SearchFilter): Promise<Place[]>
  getById(id: string | number): Promise<Place>
}