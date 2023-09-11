"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Country_1 = __importDefault(require("../../../Domain/Entities/Country"));
class JsonDBLocationRepository {
    static getInstance() {
        const subclass = this;
        if (!JsonDBLocationRepository._instances) {
            JsonDBLocationRepository._instances = new subclass();
        }
        return JsonDBLocationRepository._instances;
    }
    setJsonData(numberFile) {
        this._countriesCollection = require('./JsonData/fragments/file-fragment-' + numberFile + '.json');
    }
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
                this.setJsonData(numberFile);
                numberFile++;
                console.log(this._countriesCollection.length);
            } while (true);
            { }
        }
        catch (e) {
            console.log("cayo en excepcion");
        }
        return [new Country_1.default()];
    }
}
exports.default = JsonDBLocationRepository;
