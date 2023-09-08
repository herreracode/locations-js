"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Country_1 = require("../../../Domain/Entities/Country");
var json = require("../JsonDB/JsonData/fragments/file-fragment-1.json");
var JsonDBLocationRepository = /** @class */ (function () {
    function JsonDBLocationRepository() {
    }
    JsonDBLocationRepository.prototype.findCountriesByIsoTwoCode = function (iso2, withStates, withCities) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findCountryByIsoTwoCodeOrFail = function (iso2) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findCountriesByIsoThreeCode = function (iso3, withStates, withCities) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findCountryByIsoThreeCodeOrFail = function (iso3) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findCountriesById = function (id, withStates, withCities) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findCountryByIdOrFail = function (id) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findStatesByCountryIsoTwoCode = function (iso2) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findCitiesByCountryIsoTwoCode = function (iso2) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findStatesByCountryIsoThreeCode = function (iso3) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.findCitiesByCountryIsoThreeCode = function (iso3) {
        throw new Error("Method not implemented.");
    };
    JsonDBLocationRepository.prototype.getAllCountries = function () {
        console.log(json);
        return [new Country_1.default()];
    };
    return JsonDBLocationRepository;
}());
exports.default = JsonDBLocationRepository;
