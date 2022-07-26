import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

// Exercício 1:

const checkIfStringIsOneEdit = (stringA: string, stringB: string):boolean => {
    
    if(stringA.length - stringB.length > 1) {
        return false
    }
    else if(stringA > stringB) {
        stringA.includes(stringB)
    }
    else if(stringB > stringA) {
        stringB.includes(stringA)
    }

    let diferentCharactersCount = 0

    for(let index = 0; index <stringA.length; index++) {
        if(stringA.toLowerCase()[index] !== stringB.toLowerCase()[index]) {
            diferentCharactersCount++
        }
    }
    return diferentCharactersCount === 1; 
}

const firstTest = checkIfStringIsOneEdit("choupana", "choupan")
const secondTest = checkIfStringIsOneEdit("Bananada", " ananada")
const thirdTest = checkIfStringIsOneEdit("Gato", "Caco")

console.log(firstTest)
console.log(secondTest)
console.log(thirdTest)

// Exercício 2:

const compressAndCountEqualCharacters = (word: string):string => {
    
    const wordLetters = []
    let currentLetter = word[0]
    let counter = 0

    for (let letter of word) {
        if(letter !== currentLetter) {
            wordLetters.push(letter + counter)
            currentLetter = letter 
            counter = 0
        }
        counter++
    }

    wordLetters.push(currentLetter + counter);
    let result = "";
    for (const letter of wordLetters) {
      result += letter;
    }
  
    return result.length > word.length ? word : result;
};

const firtTest2 = compressAndCountEqualCharacters("aaaaaaai")
const secondTest2 = compressAndCountEqualCharacters("Inconstitucionalicimamente")
const thirdTtest2 = compressAndCountEqualCharacters("achooooou")

console.log(firtTest2)
console.log(secondTest2)
console.log(thirdTtest2)


app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`)
})