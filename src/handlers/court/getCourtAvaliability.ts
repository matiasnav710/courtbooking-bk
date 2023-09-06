import handleRouteErrors from "../../handleRouteErrors";
import Booking from "../../models/booking";
import datasource from "../../start/datasource";
import * as yup from "yup"

const schema = yup.object({
    courtId: yup.number().required().label('Court id')
})

const getCourtAvaliability = handleRouteErrors(async(req, res) => {
    const { courtId } = await schema.validate(req.params)
    console.log(courtId)
    const bookingRepo = datasource.getRepository(Booking)
    const courtBookings = await bookingRepo.find({ select: ["startTime", "endTime", "id"], where: { court: { id: courtId } } })
    res.status(200).send(courtBookings)
})

export default getCourtAvaliability