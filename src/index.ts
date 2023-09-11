import JsonDBLocationRepository from "./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository";

const Repository : JsonDBLocationRepository =  JsonDBLocationRepository.getInstance();

console.log(Repository.getAllCountries())

export {
    Repository,
}