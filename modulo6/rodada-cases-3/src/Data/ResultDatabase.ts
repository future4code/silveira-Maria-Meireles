import ResultModel from "../Models/ResultModel";
import BaseDatabase from "./BaseDatabase";

export default class ResultDatabase extends BaseDatabase{
    private tableName: string = "competition_result"


    insertResult = async(result: ResultModel): Promise<void> => {
        await this.getConnection()
        .insert({
            id: result.getResultId(),
            competition: result.getCompetitionName(),
            athlete: result.getAthlete(),
            result_value: result.getResult(),
            unidade: result.getUnity()
        })
        .into(this.tableName)
    }

    getAthleteByName = async(name: string):Promise<any> => {
        const [verificationResult] = await this.getConnection()
        .select("*")
        .from(this.tableName)
        .where({athlete: name})

        return verificationResult
    }

    getRanking = async(name: string):Promise<any[]> => {
        const rankingList = await this.getConnection().raw(`
        SELECT competition, athlete, result_value 
        FROM ${this.tableName}
        WHERE competition = "${name}"
        ORDER BY result_value
        `)

        return rankingList[0]
    }
}