import express from 'express'


export const productRouter = express.Router()

productRouter.post("/newProduct", productRouter)
productRouter.get("/details", productRouter)