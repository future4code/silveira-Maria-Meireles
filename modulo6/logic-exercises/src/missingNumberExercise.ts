import express from 'express'
import cors from "cors"
import { AddressInfo } from 'net'

const app = express()
app.use(cors())
app.use(express.json())

const identifyMissingNumber = (numbers: number[]): number => {
    let missingNumber: number = 0

    for(let index = 0; index < numbers.length; index++) {
        if(numbers[index + 1] - numbers[index] > 1) {
            missingNumber = numbers[index] += 1
        }
    }
    return missingNumber
}

const firstTest: number = identifyMissingNumber([1, 2, 3, 5, 6, 7, 8, 9, 10])
const secondTest: number = identifyMissingNumber([20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31])
const thirdTest: number = identifyMissingNumber([41, 42, 43, 44, 45, 46, 47, 48, 49, 51])


console.log([firstTest, secondTest, thirdTest])

const server = app.listen(3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})