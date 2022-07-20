import express from 'express'
import IdGenerator from '../services/IdGenerator'
import HashManager from '../services/HashManager'
import Authenticator from '../services/Authenticator'
import SellerDatabase from '../Data/SellerDatabase'
import SellerController from '../Controller/SellerController'
import SellerBusiness from '../Business/SellerBusiness'

const sellerBusiness = new SellerBusiness(
    new IdGenerator(),
    new HashManager(),
    new Authenticator(),
    new SellerDatabase()
)
const sellerController = new SellerController(
    sellerBusiness
)

export const sellerRouter = express.Router()

sellerRouter.post("/signUp", sellerController.signUp)
sellerRouter.post("/signIn", sellerController.signIn)