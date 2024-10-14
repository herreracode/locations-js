"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Country {
    constructor(id, name, iso2, iso3, translations = null, phoneCode = null, flagEmoji = null, flagEmojiUnicode = null, numericCode = null, currency = null, States = null) {
        this.id = id;
        this.name = name;
        this.iso2 = iso2;
        this.iso3 = iso3;
        this.translations = translations;
        this.phoneCode = phoneCode;
        this.flagEmoji = flagEmoji;
        this.flagEmojiUnicode = flagEmojiUnicode;
        this.numericCode = numericCode;
        this.currency = currency;
        this.States = States;
    }
}
exports.default = Country;
