import handleRouteErrors from "../../handleRouteErrors"
import datasource from "../../start/datasource"
import Booking from "../../models/booking"

const getBookings = handleRouteErrors(async (req, res) => {
    const bookingRepo = datasource.getRepository(Booking)
    const bookings = await bookingRepo.find({
        where: {
            user: { id: (req as any).user.id }
        },
        relations:['court','user']
    })
    res.status(200).send(bookings)
})

export default getBookings