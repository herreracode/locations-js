"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCitiesByIsoTwoCodeAndStatecode = exports.findStatesByIsoTwoCode = exports.findCountryByIsoTwoCodeWithStatesAndCities = exports.findCountryByIsoTwoCodeWithStates = exports.getAllCountries = void 0;
const JsonDBLocationRepository_1 = __importDefault(require("./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository"));
const getAllCountries = () => {
    return JsonDBLocationRepository_1.default.getInstance().getAllCountries();
};
exports.getAllCountries = getAllCountries;
const findCountryByIsoTwoCodeWithStates = (iso2) => {
    return JsonDBLocationRepository_1.default.getInstance().findCountryByIsoTwoCodeOrFail(iso2, true);
};
exports.findCountryByIsoTwoCodeWithStates = findCountryByIsoTwoCodeWithStates;
const findCountryByIsoTwoCodeWithStatesAndCities = (iso2) => {
    return JsonDBLocationRepository_1.default.getInstance().findCountryByIsoTwoCodeOrFail(iso2, true, true);
};
exports.findCountryByIsoTwoCodeWithStatesAndCities = findCountryByIsoTwoCodeWithStatesAndCities;
const findStatesByIsoTwoCode = (iso2) => {
    return JsonDBLocationRepository_1.default.getInstance().findStatesByCountryIsoTwoCode(iso2);
};
exports.findStatesByIsoTwoCode = findStatesByIsoTwoCode;
const findCitiesByIsoTwoCodeAndStatecode = (iso2, stateCode) => {
    return JsonDBLocationRepository_1.default.getInstance().findCitiesByCountryIsoTwoCodeAndStateCode(iso2, stateCode);
};
exports.findCitiesByIsoTwoCodeAndStatecode = findCitiesByIsoTwoCodeAndStatecode;
