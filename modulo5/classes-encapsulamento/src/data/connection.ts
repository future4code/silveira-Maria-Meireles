import Knex from 'knex'
import dotenv from 'dotenv'

dotenv.config();

export const connection = Knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3003,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
        multipleStatements: true
    }
})