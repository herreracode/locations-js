import { LocationRepositoryContract, City, Country, State } from "./../../../Domain";
export default class JsonDBLocationRepository implements LocationRepositoryContract {
    private static _instances;
    private _countriesCollection;
    static getInstance(): JsonDBLocationRepository;
    private setJsonData;
    private cleanJsonData;
    findCountriesByIsoTwoCode(iso2: string[], withStates?: boolean, withCities?: boolean): Country[];
    findCountryByIsoTwoCodeOrFail(iso2: string, withStates?: boolean, withCities?: boolean): Country;
    findCountriesByIsoThreeCode(iso3: any, withStates: boolean, withCities: boolean): Country[];
    findCountryByIsoThreeCodeOrFail(iso3: string): Country;
    findCountriesById(id: string, withStates: boolean, withCities: boolean): Country[];
    findCountryByIdOrFail(id: string): Country;
    findStatesByCountryIsoTwoCode(iso2: string): Country[];
    findCitiesByCountryIsoTwoCode(iso2: string): City[];
    findStatesByCountryIsoThreeCode(iso3: string): State[];
    findCitiesByCountryIsoThreeCode(iso3: string): City[];
    getAllCountries(): Country[];
    private mapCountry;
    private mapState;
    private extractCountryFromJsonByIsoCode2;
    private mapCity;
}
