import State from "./State";
export default class Country {
    id: number;
    name: string;
    iso2: string;
    iso3: string;
    translations: Object | null;
    phoneCode: string | null;
    flagEmoji: string | null;
    flagEmojiUnicode: string | null;
    numericCode: string | null;
    currency: string | null;
    States: State[] | null;
    constructor(id: number, name: string, iso2: string, iso3: string, translations?: Object | null, phoneCode?: string | null, flagEmoji?: string | null, flagEmojiUnicode?: string | null, numericCode?: string | null, currency?: string | null, States?: State[] | null);
}
