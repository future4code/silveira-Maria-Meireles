import { app } from "./app";
import { AddressInfo } from 'net'

const isAnagram = (stringUm: string, stringDois: string) => {
	return stringUm.split("").sort().join("") === stringDois.split("").sort().join("")
}

const firstTest = isAnagram("perda", "padre")
const secondTest = isAnagram("roma", "amor")
const thirdTest = isAnagram("raul", "luar")

console.log([firstTest, secondTest, thirdTest])

const server = app.listen(3003, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }else {
        console.log(`Failure upon starting server.`)
    }
})