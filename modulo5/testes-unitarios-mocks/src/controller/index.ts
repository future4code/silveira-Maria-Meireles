import { app } from "./app";
import { AddressInfo } from 'net'
import dotenv from 'dotenv'
import { validation1, validation2, validation3, validation4, validation5 } from './characterValidation'

dotenv.config()

console.log(validation1, validation2, validation3, validation4, validation5)

const server = app.listen(process.env.DB_PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        if(address) {
            console.log(`Server is running in http://localhost:${address.port}`)
        } else {
            console.log("Failure upon starting server.")
        }
    }
})