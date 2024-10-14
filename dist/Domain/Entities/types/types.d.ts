type CountryLibObject = {
    id: number;
    name: string;
    iso2: string;
    iso3: string;
    states: [];
    translations: object;
    phone_code: string;
    emoji: string;
    emojiU: string;
};
type StateLibObject = {
    id: number;
    name: string;
    state_code: string;
    cities: [];
};
type CityLibObject = {
    id: number;
    name: string;
    state_code: string;
    country_code: string;
    latitude: string;
    longitude: string;
};
export { CountryLibObject, StateLibObject, CityLibObject };
