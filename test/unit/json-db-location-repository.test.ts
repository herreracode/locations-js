import JsonDBLocationRepository from "../../src/Infrastructure/Repositories/JsonDB/JsonDBLocationRepository";

describe('Json DB repository test', () => {

    const _JsonDbRepository :JsonDBLocationRepository = new JsonDBLocationRepository;

    test('get all countries', () => {

        let countries = _JsonDbRepository.getAllCountries()

        expect(countries).not.toBeNull();

    });

});