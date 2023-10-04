import JsonDBLocationRepository from "./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository";
import * as GetterLocations from "./Getter"

const Repository : JsonDBLocationRepository =  JsonDBLocationRepository.getInstance();

export {
    Repository,
    GetterLocations
}