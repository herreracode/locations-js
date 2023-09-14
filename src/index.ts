import JsonDBLocationRepository from "./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository";

const Repository : JsonDBLocationRepository =  JsonDBLocationRepository.getInstance();

export {
    Repository,
}