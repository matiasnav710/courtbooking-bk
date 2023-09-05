import handleRouteErrors from "../../handleRouteErrors";
import Venue from "../../models/venue";
import datasource from "../../start/datasource";

const getVenues = handleRouteErrors(async(req, res) => {
    const venueRepo = datasource.getRepository(Venue)
    const venues = await venueRepo.find()
    res.status(200).send(venues)
})

export default getVenues