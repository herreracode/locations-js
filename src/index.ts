import JsonDBLocationRepository from "@locations-infrastructure/Repositories/JsonDB/JsonDBLocationRepository";

const Repository : JsonDBLocationRepository =  JsonDBLocationRepository.getInstance();

console.log(Repository.getAllCountries())

export {
    Repository,
}