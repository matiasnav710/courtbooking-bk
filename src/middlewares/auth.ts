import { RequestHandler } from "express"
import jwt from "jsonwebtoken"

const auth: RequestHandler = (req, res, next) => {
    const token = req.headers.authorization
    if(!token) return res.status(403).send({ message: "Forbidden" })
    try {
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET as string);
        (req as any).user = decodedUser
        next()
    } catch (error) {
        res.status(403).send({ message: "Forbidden" })
    }
}

export default auth