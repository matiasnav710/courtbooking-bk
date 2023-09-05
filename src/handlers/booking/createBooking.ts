import handleRouteErrors from "../../handleRouteErrors"
import datasource from "../../start/datasource"
import Booking from "../../models/booking"
import * as yup from "yup"

const schema = yup.object({
    court: yup.number().required().label('Court id'),
    startTime: yup.date().required().label('Start time'),
    endTime: yup.date().required().label('End time')
})

const createBooking = handleRouteErrors(async(req, res) => {
    const { court, startTime, endTime } = await schema.validate(req.body)
    const bookingRepo = datasource.getRepository(Booking)
    await bookingRepo.save(
        bookingRepo.create({ 
            court: { id: court }, 
            startTime, 
            endTime, 
            user: { id: (req as any).user.id }
        })
    )
    res.status(200).send({ meessage: "Successfully booked" })
})

export default createBooking