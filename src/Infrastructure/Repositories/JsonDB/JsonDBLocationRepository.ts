import LocationRepository from "../../../Domain/Contracts/LocationRepository";
import City from "../../../Domain/Entities/City";
import Country from "../../../Domain/Entities/Country";
import State from "../../../Domain/Entities/State";

export default class JsonDBLocationRepository implements LocationRepository {
    
    findCountriesByIsoTwoCode(iso2: string, withStates: boolean, withCities: boolean): Country[] {
        throw new Error("Method not implemented.");
    }
    
    findCountryByIsoTwoCodeOrFail(iso2: string): Country {
        throw new Error("Method not implemented.");
    }
    
    findCountriesByIsoThreeCode(iso3: any, withStates: boolean, withCities: boolean): Country[] {
        throw new Error("Method not implemented.");
    }
    
    findCountryByIsoThreeCodeOrFail(iso3: string): Country {
        throw new Error("Method not implemented.");
    }
    
    findCountriesById(id: string, withStates: boolean, withCities: boolean): Country[] {
        throw new Error("Method not implemented.");
    }
    
    findCountryByIdOrFail(id: string): Country {
        throw new Error("Method not implemented.");
    }
    
    findStatesByCountryIsoTwoCode(iso2: string): State[] {
        throw new Error("Method not implemented.");
    }
    
    findCitiesByCountryIsoTwoCode(iso2: string): City[] {
        throw new Error("Method not implemented.");
    }
    
    findStatesByCountryIsoThreeCode(iso3: string): State[] {
        throw new Error("Method not implemented.");
    }
    
    findCitiesByCountryIsoThreeCode(iso3: string): City[] {
        throw new Error("Method not implemented.");
    }
    
    getAllCountries(): Country[] {
        throw new Error("Method not implemented.");
    }
}