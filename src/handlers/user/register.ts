import handleRouteErrors from "../../handleRouteErrors";
import datasource from "../../start/datasource";
import User, { genAuthToken } from "../../models/user";
import bcrypt from 'bcrypt';
import * as yup from "yup"

const schema = yup.object({
    firstName: yup.string().required().label('First name'),
    lastName: yup.string().required().label('Last name'),
    email: yup.string().email().required().label('Email'),
    password: yup.string().required().label('Password')
})

const register = handleRouteErrors(async(req, res) => {
    const { email, firstName, lastName, password } = await schema.validate(req.body)
    const userRepo = datasource.getRepository(User)
    const exists = await userRepo.findOneBy({ email })
    if(exists) return res.status(400).send({ message: "Account already exists" })
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)
    const user = await userRepo.save(userRepo.create({ email, firstName, lastName, password: hashed }))
    const token = genAuthToken(user)
    res.status(200).send(token)
})

export default register