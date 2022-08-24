import { Request, Response } from 'express'
import ResultBusiness from '../Business/ResultBusiness'
import { resultDTO } from '../DTOS/resultDTO'


export default class ResultController {
    constructor (
        private resultBusiness: ResultBusiness
    ){}

    createResult = async(req: Request, res: Response):Promise<void> => {
        const {competition, athleteName, result, unity} = req.body
        try {

            const resultInput: resultDTO = {
                competition,
                athleteName,
                result,
                unity
            }

            await this.resultBusiness.createResult(resultInput)

            res.status(201).send({message: "Pontuação cadastrada."})
        } catch(error: any) {
            res.send(error.message)
        }
    }

    getCompetitionRanking = async(req: Request, res: Response):Promise<void> => {
        const {name} = req.body
        try {
            const rankingList = await this.resultBusiness.getCompetitionRanking(name)

            res.status(200).send({data: rankingList})
        }catch(error: any) {
            res.send({error: error.message})
        }
    }
}