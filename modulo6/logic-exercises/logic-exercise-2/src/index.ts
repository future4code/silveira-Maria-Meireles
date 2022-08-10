import { app } from "./app";
import { AddressInfo }  from 'net'

const findCharacterInString = (source: string, query: string) => {
    let counter = 0 
    for(let i = 0; i < source.length; i++) {
        if(source[i] === query){
            return counter = i
        }
    }
    return counter
}

const firstTest = findCharacterInString("Loki", "i")
const secondTest = findCharacterInString("Kyra", "r")
const thirdTest = findCharacterInString("Pitty", "y")

console.log([firstTest, secondTest, thirdTest])

const server = app.listen(3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})