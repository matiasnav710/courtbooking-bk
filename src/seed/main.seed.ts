import Court from "../models/court"
import Sport from "../models/sport";
import Venue from "../models/venue";
import datasource from "../start/datasource"

const main = async() => {
    await datasource.initialize()
    const sportRepo = datasource.getRepository(Sport)
    const sportList = [
        { title: "Tennis" },
        { title: "Pickleball" }
    ]
    await sportRepo.insert(sportList)
    const sports = await sportRepo.find()

    const venueRepo = datasource.getRepository(Venue)
    const venueList = [
        { name: "Venue one", address: "Address one" },
        { name: "Venue two", address: "Address two" },
        { name: "Venue three", address: "Address three" },
        { name: "Venue four", address: "Address four" },
        { name: "Venue five", address: "Address five" },
    ]
    await venueRepo.insert(venueList)
    const venues = await venueRepo.find()

    const courtRepo = datasource.getRepository(Court)
    const courtList = [...Array(20).keys()].map(num => ({ name: `Court ${num + 1}`, venue: venues[num % venues.length], sport: sports[num % sports.length] }))
    await courtRepo.insert(courtList)
    await datasource.destroy()
}

main()