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
    findCountriesByIsoTwoCode(iso2, withStates = false, withCities = false) {
        let numberFile = 1, countriesFound = [];
        this.setJsonData(numberFile);
        if (typeof iso2 === 'string') {
            countriesFound = this._countriesCollection.filter((country) => country.iso2 == iso2);
        }
        else {
            iso2.forEach((isoCode) => {
                let countryFound = null;
                numberFile = 1;
                do {
                    countryFound = this._countriesCollection.filter((country) => country.iso2 == isoCode);
                    if (countryFound.length > 0) {
                        countriesFound = countriesFound.concat(countryFound);
                        break;
                    }
                    this.setJsonData(numberFile++);
                } while (true);
            });
        }
        return countriesFound.map((countryFound) => this.mapCountry(countryFound));
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
        let numberFile = 1;
        let countries;
        do {
            try {
                this.setJsonData(numberFile);
            }
            catch (e) {
                return countries;
            }
            countries = this._countriesCollection.map((country) => this.mapCountry(country));
            numberFile++;
        } while (true);
        { }
    }
    mapCountry(country) {
        return new Country_1.default(country.id, country.name, country.iso2, country.iso3);
    }
}
exports.default = JsonDBLocationRepository;
