import City from "./City"

export default class State {

    constructor(
        public id: number,
        public name: string,
        public stateCode: string,
        public Cities?: City[],
    ) {
        this.id = id
        this.name = name
    }

}