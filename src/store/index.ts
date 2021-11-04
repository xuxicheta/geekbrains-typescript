import { Author } from './domain/author.js'
import { Book } from './domain/book.js'
import { Genre } from './domain/genre.js'
import { SearchFilter } from './domain/search-filter.js'
import { BukvoedProvider } from './providers/bookvoed/bukvoed-provider.js'
import { OzonProvider } from './providers/ozon/ozon-provider.js'

const providers = [
    new OzonProvider(),
    new BukvoedProvider()
]


// создаём общий фильтр для всех источников
const filter: SearchFilter = {
  name: 'it',
  genre: Genre.Horror,
  author: new Author('Stephen', 'King')
}

// описываем логику сортировки по цене
function sortByPrice(one: Book, two: Book): 1|-1|0 {
  if (one.price > two.price) {
    return 1
  } else if (one.price < two.price) {
    return -1
  } else {
    return 0
  }
}

// запрашиваем разные источники по единому протоколу
Promise.all(
    providers.map(provider => provider.find(filter))
).then((result) => {
  // мерджим все результаты в один
  const allResults: Book[] = [].concat(...result)
  // работаем с ними как с единым целым
  allResults.sort(sortByPrice)
})