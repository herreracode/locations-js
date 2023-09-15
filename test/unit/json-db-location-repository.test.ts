import JsonDBLocationRepository from "../../src/Infrastructure/Repositories/JsonDB/JsonDBLocationRepository";

describe('Json DB repository test', () => {

    const _JsonDbRepository :JsonDBLocationRepository = new JsonDBLocationRepository;

    test('get all countries', () => {

        let countries = _JsonDbRepository.getAllCountries()

        expect(countries).not.toBeNull();

    });

    test('get countries by iso code 2 happy path', () => {

        //with one country
        let country = _JsonDbRepository.findCountriesByIsoTwoCode('VE')

        expect(country.length).toBe(1);

        //with many countries
        let countries = _JsonDbRepository.findCountriesByIsoTwoCode(['AF','VE'])

        expect(countries.length).toBe(2);

    });

    it('get_countries_by_non_existent_iso_code_2', () => {

        //with one country
        let country = _JsonDbRepository.findCountriesByIsoTwoCode('123', true)

        expect(country.length).toBe(0);

        //with many countries
        let countries = _JsonDbRepository.findCountriesByIsoTwoCode(['345'], true)

        expect(countries.length).toBe(0);

    });

    test('get countries by iso code 2 with states', () => {

        //with one country
        let country = _JsonDbRepository.findCountriesByIsoTwoCode('AF', true)

        expect(country.length).toBe(1);
        expect(country[0].States).not.toBeNull();

        //with many countries
        let countries = _JsonDbRepository.findCountriesByIsoTwoCode(['AF','VE'], true)

        expect(countries.length).toBe(2);
        expect(countries[0].States).not.toBeNull();

    });

});