"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    constructor(id, name, iso2, iso3, translations = null, numericCode = null, phoneCode = null, currency = null, States = null) {
        this.id = id;
        this.name = name;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.translations = translations;
        this.numericCode = numericCode;
        this.phoneCode = phoneCode;
        this.currency = currency;
        this.States = States;
    }
}
exports.default = Country;
