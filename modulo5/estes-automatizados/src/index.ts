import { app } from './app'
import dotenv from 'dotenv'
import { AddressInfo } from 'net'

dotenv.config()


const server = app.listen(process.env.DB_PORT || 3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})