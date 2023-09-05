import { Router } from "express";
import getVenues from "../handlers/venue/getVenues";

const venues = Router()

venues.get("/", getVenues)

export { venues as venueRouter }