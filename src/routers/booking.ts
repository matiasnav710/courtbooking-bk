import { Router } from "express";
import createBooking from "../handlers/booking/createBooking";
import getBooking from "../handlers/booking/getBookings";
import auth from "../middlewares/auth";

const bookings = Router()

bookings.post("/createBooking", auth, createBooking)
bookings.get("/", auth, getBooking)

export { bookings as bookingRouter }