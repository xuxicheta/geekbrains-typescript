export interface Place {
    id: number;
    image: string;
    name: string;
    description: string;
    remoteness: number;
    bookedDates: number[];
    price: number;
    photos?: string[],
    coordinates?: [number, number],
}
  
export interface PlaceListResponse {
    items: Place[]
}
  
  export interface PlaceResponse {
    item: Place
}