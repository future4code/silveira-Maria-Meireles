import { personagem } from "../interfaces/personagem";

export const validadeCharacterInfo = (personagem: personagem) => {
    const {nome, vida, forca, defesa} = personagem

    if(!nome || !vida || !forca || !defesa || vida <= 0 || forca <= 0 || defesa <= 0) {
        return false
    } else {
        return true
    }
}

const subZero: personagem = {
    nome: "Sub-Zero",
    vida: 1500,
    forca: 2500,
    defesa: 1800
} 

const johnnyCage: personagem = {
    nome: "",
    vida: 1500,
    forca: 1500,
    defesa: 950
}

const scorpion: personagem = {
    nome: "Scorpion",
    vida: 0,
    forca: 3000,
    defesa: 2500
}

const kungLao: personagem = {
    nome: "Kung-Lao",
    vida: 1500,
    forca: 0,
    defesa: 2000
}

const lucyCage: personagem = {
    nome: "Lucy Cage",
    vida: 1500,
    forca: 3000,
    defesa: -20
}

export const validation1 = validadeCharacterInfo(subZero)
export const validation2 = validadeCharacterInfo(johnnyCage)
export const validation3 = validadeCharacterInfo(scorpion)
export const validation4 = validadeCharacterInfo(kungLao)
export const validation5 = validadeCharacterInfo(lucyCage)