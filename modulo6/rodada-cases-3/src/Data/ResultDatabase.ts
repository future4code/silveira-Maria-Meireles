import ResultModel from "../Models/ResultModel";
import BaseDatabase from "./BaseDatabase";

export default class ResultDatabase extends BaseDatabase{
    private tableName: string = ""

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
}