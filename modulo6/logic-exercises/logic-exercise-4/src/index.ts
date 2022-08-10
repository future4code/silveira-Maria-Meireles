import { app } from "./app";
import { AddressInfo } from 'net'


const longestCommonPrefix = (stringsToCheck: string[]) => {
    if(stringsToCheck.length === 0) return ""
    
    let commonPrefix = ""
    for(let i = 0; i < stringsToCheck[0].length; i++) {
        let currentChar = stringsToCheck[0][i]
        
        for(let j = 0; j < stringsToCheck.length; j++) {
            if(stringsToCheck[j][i] !== currentChar) {
                return commonPrefix
            }
        }
        
        if(currentChar) {
            commonPrefix += currentChar
        }
    }
    
    return commonPrefix
};

const firstTest = longestCommonPrefix(["garrafa", "garoto", "gargamel"])
const secondTest = longestCommonPrefix(["mel", "melado", "melancia"])
const thirdTest = longestCommonPrefix(["abc", "def", "ghi"])

console.log([firstTest, secondTest, thirdTest])

const server = app.listen(3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server`)
    }
})