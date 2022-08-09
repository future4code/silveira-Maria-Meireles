import express from 'express'
import IdGenerator from '../services/IdGenerator'
import ResultController from '../Controller/ResultController'
import ResultBusiness from '../Business/ResultBusiness'
import ResultDatabase from '../Data/ResultDatabase'
import CompetitionDatabase from '../Data/CompetitionData'

const resultBusiness =  new ResultBusiness(
    new IdGenerator(),
    new ResultDatabase(),
    new CompetitionDatabase()
) 

const resultController = new ResultController(
    resultBusiness
)

export const resultRouter = express.Router()

resultRouter.post("/register", resultController.createResult)
resultRouter.get("/ranking", resultController.getCompetitionRanking)