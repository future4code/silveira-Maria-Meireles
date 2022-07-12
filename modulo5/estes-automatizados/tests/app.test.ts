import { performPurchase, User } from "../src/app"

describe('Testes da função "performPurchase"', () => {
    test("Test balance greater than purchase value", () => {
        const user: User = {
            name: "Zakk",
            balance: 400
        }

        const result = performPurchase(user, 40)
        expect(result).toEqual({
            name: "Zakk",
            balance: 360
        })
    });

    test("Test balance equal to purchase value", () => {
        const user: User = {
            name: "Ozzy",
            balance: 1000
        }

        const result = performPurchase(user, 1000)
        expect(result).toEqual({
            name: "Ozzy",
            balance: 0
        })
    });

    test("Test purchase value greater than balance", () => {
        const user: User = {
            name: "Corey",
            balance: 3000
        }

        const result = performPurchase(user, 4000)

        expect(result).not.toBeDefined()
    })
})