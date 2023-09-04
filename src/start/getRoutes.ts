import { Express, json } from "express"
import cors from "cors"
import { Routes } from "../constants/constants"

const getRoutes = (app: Express) => {
    app.use(json())
    app.use(cors())
    app.use(Routes.USER)
}

export default getRoutes