import Country from "../Entities/Country";
import State from "../Entities/State";
import City from "../Entities/City";
export default interface LocationRepository {
    findCountriesByIsoTwoCode(iso2: string, withStates: boolean, withCities: boolean): Country[];
    findCountryByIsoTwoCodeOrFail(iso2: string): Country;
    findCountriesByIsoThreeCode(iso3: any, withStates: boolean, withCities: boolean): Country[];
    findCountryByIsoThreeCodeOrFail(iso3: string): Country;
    findCountriesById(id: string, withStates: boolean, withCities: boolean): Country[];
    findCountryByIdOrFail(id: string): Country;
    findStatesByCountryIsoTwoCode(iso2: string): State[];
    findCitiesByCountryIsoTwoCode(iso2: string): City[];
    findStatesByCountryIsoThreeCode(iso3: string): State[];
    findCitiesByCountryIsoThreeCode(iso3: string): City[];
    getAllCountries(): Country[];
}
