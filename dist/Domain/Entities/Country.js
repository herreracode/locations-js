"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    constructor(id, name, iso2, iso3, numericCode = null, phoneCode = null, currency = null, translations = null, States = null) {
        this.id = id;
        this.name = name;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.numericCode = numericCode;
        this.phoneCode = phoneCode;
        this.currency = currency;
        this.translations = translations;
        this.States = States;
    }
}
exports.default = Country;
