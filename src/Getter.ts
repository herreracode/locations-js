import JsonDBLocationRepository from "./Infrastructure/Repositories/JsonDB/JsonDBLocationRepository";

export const getAllCountries = () => {

    return JsonDBLocationRepository.getInstance().getAllCountries();
}

export const findCountryByIsoTwoCodeWithStates = (iso2: string) => {

    return JsonDBLocationRepository.getInstance().findCountryByIsoTwoCodeOrFail(iso2,true);
}

export const findCountryByIsoTwoCodeWithStatesAndCities = (iso2: string) => {

    return JsonDBLocationRepository.getInstance().findCountryByIsoTwoCodeOrFail(iso2,true,true);
}

export const findStatesByIsoTwoCode = (iso2: string) => {

    return JsonDBLocationRepository.getInstance().findStatesByCountryIsoTwoCode(iso2);

}
export const findCitiesByIsoTwoCodeAndStatecode = (iso2: string, stateCode: string) => {

    return JsonDBLocationRepository.getInstance().findCitiesByCountryIsoTwoCodeAndStateCode(iso2, stateCode);

}