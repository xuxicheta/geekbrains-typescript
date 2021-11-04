import { Book } from './book.js'
import { SearchFilter } from './search-filter.js'

/**
 * Каждый источник должен уметь искать по фильтрам и получить книгу по ID
*/
export abstract class Provider {
  /**
   * Источник получает фильтр в общем виде и сам должен преобразовать его в свой формат
   * Источник также должен конвертировать свой ответ в объекты книг
   */
   abstract find(filter: SearchFilter): Promise<Book[]>;
   abstract getById(id: string): Promise<Book>
}

