import City from "./City";
export default class State {
    id: number;
    name: string;
    stateCode: string;
    Cities?: City[];
    constructor(id: number, name: string, stateCode: string, Cities?: City[]);
}
