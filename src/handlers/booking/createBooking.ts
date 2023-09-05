import handleRouteErrors from "../../handleRouteErrors"
import * as yup from "yup"
import datasource from "../../start/datasource"
import Booking from "../../models/booking"

const schema = yup.object({
    courtId: yup.string().required().label('Court id')
})

const createBooking = handleRouteErrors(async(req, res) => {
    const { courtId } = await schema.validate(req.body)
    res.status(200).send({ message: "work in progress" })
})

export default createBooking