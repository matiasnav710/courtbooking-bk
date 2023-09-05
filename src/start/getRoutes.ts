import { Express, json } from "express"
import { Routes } from "../constants/constants"
import { userRouter } from "../routers/user"
import { courtRouter } from "../routers/court"
import { venueRouter } from "../routers/venue"
import cors from "cors"

const getRoutes = (app: Express) => {
    app.use(json())
    app.use(cors())
    app.use(Routes.USER, userRouter)
    app.use(Routes.COURT, courtRouter)
    app.use(Routes.VENUE, venueRouter)
}

export default getRoutes