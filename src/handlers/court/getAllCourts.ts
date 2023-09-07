import handleRouteErrors from "../../handleRouteErrors";
import datasource from "../../start/datasource";
import Court from "../../models/court";
import * as yup from "yup"

const getAllCourts = handleRouteErrors(async(req, res) => {
    const courtRepo = datasource.getRepository(Court)
    const courts = await courtRepo.find({ relations: ["venue", "sport"]})
    res.status(200).send(courts)
})


export default getAllCourts