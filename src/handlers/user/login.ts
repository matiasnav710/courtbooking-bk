import handleRouteErrors from "../../handleRouteErrors"
import datasource from "../../start/datasource"
import User, { genAuthToken } from "../../models/user"
import bcrypt from "bcrypt"
import * as yup from "yup"

const schema = yup.object({
    email: yup.string().email().required().label('Email'),
    password: yup.string().required().label('Password')
})

const login = handleRouteErrors(async(req, res) => {
    const { email, password } = await schema.validate(req.body)
    const userRepo = datasource.getRepository(User)
    const user = await userRepo.findOneBy({ email })
    if(!user) return res.status(404).send({ message: "Incorrect email / password" })
    const isPassCorrect = await bcrypt.compare(password, user.password)
    if(!isPassCorrect) return res.status(404).send({ message: "Incorrect email / password" })
    const token = genAuthToken(user)
    res.status(200).send(token)
})

export default login