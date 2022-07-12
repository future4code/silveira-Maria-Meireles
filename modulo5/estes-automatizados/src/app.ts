import express from "express"
import cors from "cors"

interface User {
    name: string
    balance: number
}

const performPurchase = (user: User, value: number): User | undefined => {
    const purchaseValue: number = value
    if(user.balance >= purchaseValue) {
        const UpdatedUser: User = {
            name: user.name,
            balance: user.balance - purchaseValue
        }
        return UpdatedUser
    } else {
        return undefined;
    }
}

performPurchase({name: "maria", balance: 2000}, 500)


export const app = express()
app.use(express.json())
app.use(cors())