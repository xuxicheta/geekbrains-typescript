// Протокол фильтра, с которым должен работать каждый провайдер

export interface SearchFilter {
    name: string;
    city: string;
    checkin: Date;
    checkout: Date;
    price: number;
  }