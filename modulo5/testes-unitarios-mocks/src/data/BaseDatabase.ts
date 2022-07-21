import dotenv from "dotenv"
import knex, { Knex } from 'knex'

dotenv.config()

export default class BaseDatabase {
    private connection: null | Knex = null

    getConnecton = () => {
        if(!this.connection) {
            this.connection = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    port: Number(process.env.DB_PORT || "3003"),
                    password: process.env.DB_PASS,
                    database: process.env.DB_SCHEMA,
                    multipleStatements: true
                }
            })
        }
        return this.connection
    }
}