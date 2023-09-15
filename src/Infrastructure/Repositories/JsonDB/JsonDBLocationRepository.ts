import {
    LocationRepositoryContract,
    City,
    Country,
    State,
    CountryLibObject,
    StateLibObject
} from "./../../../Domain"

export default class JsonDBLocationRepository implements LocationRepositoryContract {

    private static _instances: JsonDBLocationRepository;

    private _countriesCollection: CountryLibObject[];

    public static getInstance(): JsonDBLocationRepository {

        const subclass = this;

        if (!JsonDBLocationRepository._instances) {
            JsonDBLocationRepository._instances = new subclass();
        }

        return JsonDBLocationRepository._instances;
    }

    private setJsonData(numberFile: number): void {
        this._countriesCollection = require('./JsonData/fragments/file-fragment-' + numberFile + '.json')
    }

    private cleanJsonData():void {
        this._countriesCollection = []
    }

    findCountriesByIsoTwoCode(iso2: string[] , withStates: boolean = false, withCities: boolean = false): Country[] {

        let countriesFound: CountryLibObject[] = [],
            countryExtracted: CountryLibObject|null

            iso2.forEach((isoCode) => {

                countryExtracted = this.extractCountryFromJsonByIsoCode2(isoCode)

                !!countryExtracted
                    ? countriesFound.push(countryExtracted)
                    : []
            })

        return countriesFound.map(
            (countryFound: CountryLibObject) : Country => this.mapCountry(countryFound, withStates)
        );
    }

    findCountryByIsoTwoCodeOrFail(iso2: string, withStates: boolean = false): Country {

        let countryExtracted: CountryLibObject|null

        countryExtracted = this.extractCountryFromJsonByIsoCode2(iso2)

        if(!countryExtracted){
            throw new Error("country " + iso2 + "not found")
        }

        return this.mapCountry(countryExtracted, withStates)
    }

    findCountriesByIsoThreeCode(iso3: any, withStates: boolean, withCities: boolean): Country[] {
        throw new Error("Method not implemented.");
    }

    findCountryByIsoThreeCodeOrFail(iso3: string): Country {
        throw new Error("Method not implemented.");
    }

    findCountriesById(id: string, withStates: boolean, withCities: boolean): Country[] {
        throw new Error("Method not implemented.");
    }

    findCountryByIdOrFail(id: string): Country {
        throw new Error("Method not implemented.");
    }

    findStatesByCountryIsoTwoCode(iso2: string): Country[] {

        return [new Country(1,"adasd","222","222","2222")];
    }

    findCitiesByCountryIsoTwoCode(iso2: string): City[] {
        throw new Error("Method not implemented.");
    }

    findStatesByCountryIsoThreeCode(iso3: string): State[] {
        throw new Error("Method not implemented.");
    }

    findCitiesByCountryIsoThreeCode(iso3: string): City[] {
        throw new Error("Method not implemented.");
    }

    // @ts-ignore
    getAllCountries(): Country[] {

            let numberFile: number = 1
            let countries: Country[]

            do {

                try {

                    this.setJsonData(numberFile)

                }catch (e) {

                    return countries

                }

                countries = this._countriesCollection.map((country): Country => this.mapCountry(country))

                numberFile++

            } while (true) {}
    }

    private mapCountry(country: CountryLibObject, withState: boolean = false) : Country
    {
        let CountryObject: Country = new Country(
            country.id, country.name, country.iso2, country.iso3
        );
        
        if(withState){

            CountryObject.States = country.states.map((state) => this.mapState(state))

        }

        return CountryObject
    }

    private mapState(state :StateLibObject) :State
    {
        let StateObject = new State(
            state.id, state.name, state.state_code
        );

        //todo: with cities

        return StateObject;
    }

    private extractCountryFromJsonByIsoCode2(isoCode2: string): CountryLibObject|null
    {
        let countryFound = null,
            numberFile :number = 1

        this.setJsonData(numberFile)

        do {

            try {

                countryFound = this._countriesCollection.filter((country: CountryLibObject): boolean => country.iso2 == isoCode2)[0];

                countryFound = typeof countryFound !== 'undefined' ? countryFound : null

                if (!!countryFound) {
                    break
                }

                this.setJsonData(numberFile++)

            } catch (e) {

                break;
            }

        } while (true)

        this.cleanJsonData()

        return countryFound
    }
}