import { app } from "./app";
import dotenv from 'dotenv'
import { AddressInfo } from 'net'
import { competitionRouter } from "../routes/competitonRouter";

dotenv.config()

app.use("/competition", competitionRouter)

const server = app.listen(Number(process.env.DB_PORT || "3003"), () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log(`Failure upon starting server.`)
    }
})