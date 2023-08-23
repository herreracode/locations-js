import JsonDBLocationRepository from "./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository";

const Repository : JsonDBLocationRepository =  new JsonDBLocationRepository()

const holaFunct = () => console.log("gola")

export {
    JsonDBLocationRepository,
    holaFunct
}