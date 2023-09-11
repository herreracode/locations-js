import LocationRepository from "../../../Domain/Contracts/LocationRepository";
import City from "../../../Domain/Entities/City";
import Country from "../../../Domain/Entities/Country";
import State from "../../../Domain/Entities/State";

export default class JsonDBLocationRepository implements LocationRepository {

    private static _instances: JsonDBLocationRepository;
    private _countriesCollection: object[];

    public static getInstance(): JsonDBLocationRepository {

        const subclass = this;

        if (!JsonDBLocationRepository._instances) {
            JsonDBLocationRepository._instances = new subclass();
        }

        return JsonDBLocationRepository._instances;
    }

    private setJsonData(numberFile: number): void {
        this._countriesCollection = require('./JsonData/fragments/file-fragment-' + numberFile + '.json')
    }

    findCountriesByIsoTwoCode(iso2: string, withStates: boolean, withCities: boolean): Country[] {
        throw new Error("Method not implemented.");
    }

    findCountryByIsoTwoCodeOrFail(iso2: string): Country {
        throw new Error("Method not implemented.");
    }

    findCountriesByIsoThreeCode(iso3: any, withStates: boolean, withCities: boolean): Country[] {
        throw new Error("Method not implemented.");
    }

    findCountryByIsoThreeCodeOrFail(iso3: string): Country {
        throw new Error("Method not implemented.");
    }

    findCountriesById(id: string, withStates: boolean, withCities: boolean): Country[] {
        throw new Error("Method not implemented.");
    }

    findCountryByIdOrFail(id: string): Country {
        throw new Error("Method not implemented.");
    }

    findStatesByCountryIsoTwoCode(iso2: string): State[] {
        throw new Error("Method not implemented.");
    }

    findCitiesByCountryIsoTwoCode(iso2: string): City[] {
        throw new Error("Method not implemented.");
    }

    findStatesByCountryIsoThreeCode(iso3: string): State[] {
        throw new Error("Method not implemented.");
    }

    findCitiesByCountryIsoThreeCode(iso3: string): City[] {
        throw new Error("Method not implemented.");
    }

    // @ts-ignore
    getAllCountries(): Country[] {

        try {

            let numberFile: number = 1;

            do {

                this.setJsonData(numberFile)

                numberFile++;

                console.log(this._countriesCollection.length);

            } while (true) { }

        } catch (e) {
            console.log("cayo en excepcion");
        }

        return [new Country()]
    }
}