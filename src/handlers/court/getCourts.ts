import handleRouteErrors from "../../handleRouteErrors";
import datasource from "../../start/datasource";
import Court from "../../models/court";
import * as yup from "yup"

const schema = yup.object({
    id: yup.number().required().label('Venue id')
})

const getCourts = handleRouteErrors(async(req, res) => {
    const { id } = await schema.validate(req.params)
    const courtRepo = datasource.getRepository(Court)
    const courts = await courtRepo.find({ relations: ["venue", "sport"], where: { venue: { id } } })
    res.status(200).send(courts)
})

export default getCourts