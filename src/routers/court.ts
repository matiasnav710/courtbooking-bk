import { Router } from "express";
import getCourts from "../handlers/court/getCourts";
import getAllCourts from "../handlers/court/getAllCourts";
import getCourtAvaliability from "../handlers/court/getCourtAvaliability";

const courts = Router()

courts.get("/:id", getCourts)
courts.get("", getAllCourts)
courts.get("/avaliability/:courtId", getCourtAvaliability)

export { courts as courtRouter }