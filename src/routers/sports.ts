import { Router } from "express";
import getAllSports from "../handlers/sport/getAllSports";

const sports = Router()

sports.get("", getAllSports)

export { sports as sportRouter }