export default class ResultModel {
    constructor(
        private id: string,
        private competition: string,
        private athleteName: string,
        private result: number,
        private unity: string
    ){}

    getResultId = ():string => {
        return this.id
    }

    getCompetitionName = (): string => {
        return this.competition
    }

    getAthlete = ():string => {
        return this.athleteName
    }

    getResult = ():number => {
        return this.result
    }

    getUnity = (): string => {
        return this.unity
    }
} 