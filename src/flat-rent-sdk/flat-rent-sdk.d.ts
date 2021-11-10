//интерфейс для фильтра при поиске в search
export interface SearchParameters {
  city: string;
  checkInDate: Date;
  checkOutDate: Date;
  priceLimit: number;
}

//интерфейс для квартир которые приходят из дб
export interface Flat {
  id: string | number;
  title: string;
  details: string;
  photos: string[];
  coordinates: [number, number];
  bookedDates: number[];
  price: number;
}

// экспорт функций cloneDate и addDays
export function cloneDate(date: Date): Date;
export function addDays(date: Date, days: number): Date;

//экспорт класса FlatRentSdk с функциями get, search, book
export class FlatRentSdk {

  get(id: string | number): Promise<Flat>;

  search(parameters: SearchParameters): Flat[];

  book(flatId: number | number, checkInDate: Date, checkOutDate: Date): number;
  
}
