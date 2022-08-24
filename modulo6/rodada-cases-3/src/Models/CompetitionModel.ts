export default class CompetitionModel {
    constructor(
        private id: string,
        private name: string,
        private type: string,
        private status: string
    ){}

    public getId = (): string => {
        return this.id
    }

    public getName = (): string => {
        return this.name
    }

    public getType = ():string => {
        return this.type
    }

    public getStatus = ():string => {
        return this.status
    }
}