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
        } catch(error: any) {
            res.send(error.message)
        }
    }
}