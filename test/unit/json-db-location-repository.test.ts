import JsonDBLocationRepository from "../../src/Infrastructure/Repositories/JsonDB/JsonDBLocationRepository";
import {Country} from "../../src/Domain";

describe('Json DB repository test', () => {

    const _JsonDbRepository :JsonDBLocationRepository = new JsonDBLocationRepository;

    /**
     * get all countries method
     */

    it('get all countries', () => {

        let countries = _JsonDbRepository.getAllCountries()

        expect(countries).not.toBeNull();

    });

    /**
     * scenarios METHOD findCountriesByIsoTwoCode
     */

    it('get countries by iso code 2 happy path', () => {

        //with many countries
        let countries = _JsonDbRepository.findCountriesByIsoTwoCode(['EC','VE'])

        expect(countries.length).toBe(2);

    });

    it('get_countries_by_non_existent_iso_code_2', () => {

       //with many countries
        let countries = _JsonDbRepository.findCountriesByIsoTwoCode(['345'], true)

        expect(countries.length).toBe(0);

    });

    it('get countries by iso code 2 with states', () => {

       //with many countries have states
        let countries = _JsonDbRepository.findCountriesByIsoTwoCode(['EC','VE'], true)

        expect(countries.length).toBe(2);
        expect(countries[0].States).not.toBeNull();

    });

    /**
     * scenarios METHOD findCountryByIsoTwoCodeOrFail
     */

    it('get_country_by_iso_code_2_or_fail_happy_path', () => {

        //with one country
        let CountryObject = _JsonDbRepository.findCountryByIsoTwoCodeOrFail('VE')

        expect(CountryObject).toBeInstanceOf(Country);

    });

    it('get_country_by_iso_code_2_or_fail_when_expected_exception', () => {

        expect(() => _JsonDbRepository.findCountryByIsoTwoCodeOrFail('NOT_FOUND')).toThrow(Error);
    });

});