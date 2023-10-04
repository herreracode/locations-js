import State from "./State";


export default class Country {

    constructor(
        public id: number,
        public name: string,
        public iso2: string,
        public iso3: string,
        public numericCode: string|null = null,
        public phoneCode: string|null = null,
        public currency: string|null = null,
        public translations: string|null = null,
        public States: State[]|null = null,
    ) {
        
    }

}