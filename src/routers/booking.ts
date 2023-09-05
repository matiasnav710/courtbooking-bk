import { Router } from "express";
import createBooking from "../handlers/booking/createBooking";
import auth from "../middlewares/auth";

const bookings = Router()

bookings.post("/creatBooking", auth, createBooking)

export { bookings as bookingRouter }