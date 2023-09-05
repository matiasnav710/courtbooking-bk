import { Express, json } from "express"
import { Routes } from "../constants/constants"
import { userRouter } from "../routers/user"
import cors from "cors"

const getRoutes = (app: Express) => {
    app.use(json())
    app.use(cors())
    app.use(Routes.USER, userRouter)
}

export default getRoutes