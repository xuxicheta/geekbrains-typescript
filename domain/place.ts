// Доменный объект для места проживания

export class Place {
    constructor(
        private readonly provider: string,
        public readonly originalId: number,
        public readonly image: string,
        public readonly name: string,
        public readonly description: string,
        public readonly remoteness: number,
        public readonly bookedDates: number[],
        public readonly price: number,
        public readonly photos?: string[],
        public readonly coordinates?: [number, number],
      ) {}

      get id () {
        return this.provider + '-' + this.originalId
      }

      public isProvidedBy(providerName: string): boolean {
        return this.provider === providerName
      }
  } 

  