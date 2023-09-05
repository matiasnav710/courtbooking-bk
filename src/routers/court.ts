import { Router } from "express";
import getCourts from "../handlers/court/getCourts";

const courts = Router()

courts.get("/:id", getCourts)

export { courts as courtRouter }