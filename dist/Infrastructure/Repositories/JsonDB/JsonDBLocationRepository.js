"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Domain_1 = require("./../../../Domain");
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
    cleanJsonData() {
        this._countriesCollection = [];
    }
    findCountriesByIsoTwoCode(iso2, withStates = false, withCities = false) {
        let countriesFound = [], countryExtracted;
        iso2.forEach((isoCode) => {
            countryExtracted = this.extractCountryFromJsonByIsoCode2(isoCode);
            !!countryExtracted
                ? countriesFound.push(countryExtracted)
                : [];
        });
        return countriesFound.map((countryFound) => this.mapCountry(countryFound, withStates, withCities));
    }
    findCountryByIsoTwoCodeOrFail(iso2, withStates = false, withCities = false) {
        let countryExtracted;
        countryExtracted = this.extractCountryFromJsonByIsoCode2(iso2);
        if (!countryExtracted) {
            throw new Error("country " + iso2 + "not found");
        }
        return this.mapCountry(countryExtracted, withStates, withCities);
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
    findStatesByCountryIsoTwoCode(iso2Country, withCities = false) {
        let countries = this.findCountryByIsoTwoCodeOrFail(iso2Country, true, withCities);
        return countries.States;
    }
    findCitiesByCountryIsoTwoCodeAndStateCode(iso2, stateCode) {
        let State = this.findStatesByCountryIsoTwoCode(iso2, true).filter((state) => state.stateCode == stateCode)[0];
        if (!State) {
            throw new Domain_1.ExceptionsDomain.StateNotFound("The State " + stateCode + " not found");
        }
        return State.Cities;
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
        let countries = [];
        do {
            try {
                this.setJsonData(numberFile);
            }
            catch (e) {
                return countries;
            }
            countries = countries.concat(this._countriesCollection.map((country) => this.mapCountry(country)));
            numberFile++;
        } while (true);
        { }
    }
    mapCountry(country, withState = false, withCities = false) {
        let CountryObject = new Domain_1.Country(country.id, country.name, country.iso2, country.iso3, country.translations);
        if (withState) {
            CountryObject.States = country.states.map((state) => this.mapState(state, withCities));
        }
        return CountryObject;
    }
    mapState(state, withCities = false) {
        let StateObject = new Domain_1.State(state.id, state.name, state.state_code);
        if (withCities) {
            StateObject.Cities = state.cities.map((city) => this.mapCity(city));
        }
        return StateObject;
    }
    extractCountryFromJsonByIsoCode2(isoCode2) {
        let countryFound = null, numberFile = 1;
        this.setJsonData(numberFile);
        do {
            try {
                countryFound = this._countriesCollection.filter((country) => country.iso2 == isoCode2)[0];
                countryFound = typeof countryFound !== 'undefined' ? countryFound : null;
                if (!!countryFound) {
                    break;
                }
                this.setJsonData(numberFile++);
            }
            catch (e) {
                break;
            }
        } while (true);
        this.cleanJsonData();
        return countryFound;
    }
    mapCity(city) {
        return new Domain_1.City(city.id, city.name, city.latitude, city.longitude);
    }
}
exports.default = JsonDBLocationRepository;
