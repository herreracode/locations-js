export declare const getAllCountries: () => import("./Domain").Country[];
export declare const findCountryByIsoTwoCodeWithStates: (iso2: string) => import("./Domain").Country;
export declare const findCountryByIsoTwoCodeWithStatesAndCities: (iso2: string) => import("./Domain").Country;
export declare const findStatesByIsoTwoCode: (iso2: string) => import("./Domain").State[];
export declare const findCitiesByIsoTwoCodeAndStatecode: (iso2: string, stateCode: string) => import("./Domain").City[];
