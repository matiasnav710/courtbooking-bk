import handleRouteErrors from "../../handleRouteErrors";
import User from "../../models/user";
import datasource from "../../start/datasource";

const getUser = handleRouteErrors(async(req, res) => {
    const userId = (req as any).user.id;
    const userRepo = datasource.getRepository(User)
    const user = await userRepo.findOneBy({ id: userId })
    res.status(200).send({ ...user, password: undefined })
})

export default getUser