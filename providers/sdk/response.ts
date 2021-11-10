export interface Place {
    id: string | number;
    image?: string;
    title: string;
    details: string;
    remoteness?: number;
    bookedDates: number[];
    price: number;
    photos: string[];
    coordinates: [number, number];
}
  
export interface PlaceListResponse {
    items: Place[]
}
  
  export interface PlaceResponse {
    item: Place
}