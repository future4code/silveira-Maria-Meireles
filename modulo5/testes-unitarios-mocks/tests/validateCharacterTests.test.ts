import { validadeCharacterInfo } from '../src/controller/characterValidation'
import { performAttackWithInversion } from '../src/controller/performAttack';
import { personagem } from '../src/interfaces/personagem';


describe("Testing validateCharacterInfo function", () => {
    test("Should return is valid false on empty name field", () => {
        const result = validadeCharacterInfo({nome: "", vida: 1500, forca: 2000, defesa: 8732873});

        expect(result).toBe(false)
    })

    test("Should return false for field vida equal to 0 or less", () => {
        const result = validadeCharacterInfo({
                nome: "maria",
                vida: 0,
                forca: 626272,
                defesa: 727292
            })
            expect(result).toBe(false)
    })

    test("Should return false for field forca equal to 0 or less", () => {
        const result = validadeCharacterInfo({
            nome: "julia",
            vida: 1500,
            forca: 0,
            defesa: 9272
        })
        expect(result).toBe(false)
    })

    test("Should return false for field defesa equal to 0 or less", () => {
        const result = validadeCharacterInfo({
            nome: "dudica",
            vida: 1500,
            forca: 8000,
            defesa: 0
        })
        expect(result).toBe(false)
    })

    test("Should return false for field vida, forca or defesa minor than 0", () => {
        const result = validadeCharacterInfo({
            nome: "Mariazinha",
            vida: -2000,
            forca: 4000,
            defesa: 3600
        })

        const result2 = validadeCharacterInfo({
            nome: "Mariazinha",
            vida: 2000,
            forca: -4000,
            defesa: 3600
        })

        const result3 = validadeCharacterInfo({
            nome: "Mariazinha",
            vida: 2000,
            forca: 4000,
            defesa: -3600
        })
        expect(result).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
    })


    test("Should return true for all valid fields", () => {
        const result = validadeCharacterInfo({
            nome: "mateus",
            vida: 1500,
            forca: 500,
            defesa: 100
        })
        expect(result).toBe(true)
    })
})

describe("lerning mocks", () => {
  test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return true
    })

    expect(validatorMock()).toBe(true)
  })

  test("Creating negative mocks", () => {
    const validatorMock = jest.fn(() => {
        return false
    })

    expect(validatorMock()).toBe(false)
  })
})

describe("Testing the 'perform attack' function", () => {
    test("Should return true for valid characters input", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: personagem = {
            nome: "Sandro heleno",
            vida: 1500,
            forca: 600,
            defesa: 200
        }

        const defender: personagem = {
            nome: "Seu adalfredo",
            vida: 1500,
            forca: 800,
            defesa: 400
        }

        performAttackWithInversion(attacker, defender, validatorMock as any)

        expect(defender.vida).toEqual(1300)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toBeCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })

    test("Testing a invalid character input", () => {
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: personagem = {
            nome: "Kung-Lao",
            vida: 0,
            forca: 800,
            defesa: 700
        }

        const defensor: personagem = {
            nome: "Mileena",
            vida: 1500,
            forca: 900,
            defesa: 600
        }

        try {
            performAttackWithInversion(attacker, defensor, validatorMock as any)
        }catch(error: any) {
            expect(error.message).toBe("Invalid character")
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(1)
        expect(validatorMock).toHaveReturnedTimes(1)
        }
    })
})