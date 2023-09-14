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

    findCountriesByIsoTwoCode(iso2: string|string[] , withStates: boolean = false, withCities: boolean = false): Country[] {

        let numberFile: number = 1,
            countriesFound: CountryLibObject[] = []

        this.setJsonData(numberFile)

        if(typeof iso2 === 'string'){

            countriesFound = this._countriesCollection.filter((country: CountryLibObject) :boolean => country.iso2 == iso2)

        }else{

            iso2.forEach((isoCode) => {

                let countryFound = null

                numberFile = 1

                do{

                    countryFound = this._countriesCollection.filter((country: CountryLibObject) :boolean => country.iso2 == isoCode)

                    if(countryFound.length > 0){
                        countriesFound = countriesFound.concat(countryFound)
                        break
                    }

                    this.setJsonData(numberFile++)

                } while (true)

            })
        }

        return countriesFound.map(
            (countryFound: CountryLibObject) : Country => this.mapCountry(countryFound, withStates)
        );
    }

    findCountryByIsoTwoCodeOrFail(iso2: string): Country {
        throw new Error("Method not implemented.");
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

    findStatesByCountryIsoTwoCode(iso2: string): State[] {
        throw new Error("Method not implemented.");
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
}