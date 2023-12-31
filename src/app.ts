import envConfig from "./start/envConfig";
envConfig();

import datasource from "./start/datasource";
import express from "express"
import getRoutes from "./start/getRoutes";

datasource.initialize()
    .then(() => console.log("connected with database"))
    .catch((err) => console.error(err))

const app = express()
getRoutes(app)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Court backend at port: ${PORT}`))