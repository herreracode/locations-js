import State from "./State";


export default class Country {

    constructor(
        public id: number,
        public name: string,
        public iso2: string,
        public iso3: string,
        public numericCode?: string,
        public phoneCode?: string,
        public currency?: string,
        public translations?: [],
        public States?: State[],
    ) {
        this.id = id
        this.name = name
    }

}