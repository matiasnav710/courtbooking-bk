import { DataSource } from "typeorm"
import { isProduction } from "../constants/constants"

const datasource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port: +(process.env.PG_PORT || 5432),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    entities: [__dirname + `/../models/**/*.${isProduction ? 'js' : 'ts'}`],
    synchronize: false,
})

export default datasource