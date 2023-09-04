import { Router } from "express";
import auth from "../middlewares/auth";
import login from "../handlers/user/login";
import register from "../handlers/user/register";
import getUser from "../handlers/user/getUser";

const users = Router()

users.get('/getUser', auth, getUser)
users.post('/login', login)
users.post('/register', register)

export { users as userRouter }