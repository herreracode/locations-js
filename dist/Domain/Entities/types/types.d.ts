type CountryLibObject = {
    id: number;
    name: string;
    iso2: string;
    iso3: string;
    states: [];
};
type StateLibObject = {
    id: number;
    name: string;
    state_code: string;
};
export { CountryLibObject, StateLibObject };
