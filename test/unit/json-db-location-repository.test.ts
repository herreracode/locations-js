import JsonDBLocationRepository from "@locations-infrastructure/Repositories/JsonDB/JsonDBLocationRepository";

describe('Json DB repository test', () => {

    const _JsonDbRepository :JsonDBLocationRepository = new JsonDBLocationRepository;

    test('get all countries', () => {

        let countries = _JsonDbRepository.getAllCountries()

        expect(countries).not.toBeNull();

    });

    test('get countries by iso code 2 happy path', () => {

        //with one country
        let country = _JsonDbRepository.findCountriesByIsoTwoCode('AF')

        expect(country.length).toBe(1);

        //with many countries
        let countries = _JsonDbRepository.findCountriesByIsoTwoCode(['AF','VE'])

        expect(countries.length).toBe(2);

    });

});