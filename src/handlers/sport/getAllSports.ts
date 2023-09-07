import handleRouteErrors from "../../handleRouteErrors";
import datasource from "../../start/datasource";
import Court from "../../models/court";
import * as yup from "yup"
import Sport from "../../models/sport";

const getAllSports = handleRouteErrors(async(req, res) => {
    const sportRepo = datasource.getRepository(Sport)
    const sports = await sportRepo.find()
    res.status(200).send(sports)
})


export default getAllSports