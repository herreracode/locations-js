"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Country_1 = __importDefault(require("../../../Domain/Entities/Country"));
class JsonDBLocationRepository {
    findCountriesByIsoTwoCode(iso2, withStates, withCities) {
        throw new Error("Method not implemented.");
    }
    findCountryByIsoTwoCodeOrFail(iso2) {
        throw new Error("Method not implemented.");
    }
    findCountriesByIsoThreeCode(iso3, withStates, withCities) {
        throw new Error("Method not implemented.");
    }
    findCountryByIsoThreeCodeOrFail(iso3) {
        throw new Error("Method not implemented.");
    }
    findCountriesById(id, withStates, withCities) {
        throw new Error("Method not implemented.");
    }
    findCountryByIdOrFail(id) {
        throw new Error("Method not implemented.");
    }
    findStatesByCountryIsoTwoCode(iso2) {
        throw new Error("Method not implemented.");
    }
    findCitiesByCountryIsoTwoCode(iso2) {
        throw new Error("Method not implemented.");
    }
    findStatesByCountryIsoThreeCode(iso3) {
        throw new Error("Method not implemented.");
    }
    findCitiesByCountryIsoThreeCode(iso3) {
        throw new Error("Method not implemented.");
    }
    // @ts-ignore
    getAllCountries() {
        try {
            let numberFile = 1;
            do {
                let hola = require('./JsonData/fragments/file-fragment-' + numberFile + '.json');
                numberFile++;
                console.log(hola.length);
            } while (true);
            {
            }
        }
        catch (e) {
            console.log("cayo en excepcion");
        }
        return [new Country_1.default()];
    }
}
exports.default = JsonDBLocationRepository;
