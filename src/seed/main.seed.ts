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
    const getDate = (hours: number) => {
        const date = new Date()
        date.setHours(hours)
        date.setMinutes(0)
        date.setSeconds(0)
        date.setMilliseconds(0)
        return date;
    }
    const venueList = [
        { name: "Venue one", address: "Address one", startTime: getDate(8), endTime: getDate(21) },
        { name: "Venue two", address: "Address two", startTime: getDate(21), endTime: getDate(5) },
        { name: "Venue three", address: "Address three", startTime: getDate(5), endTime: getDate(13) },
        { name: "Venue four", address: "Address four", startTime: getDate(13), endTime: getDate(24) },
        { name: "Venue five", address: "Address five", startTime: getDate(8), endTime: getDate(21) },
    ]
    await venueRepo.insert(venueList)
    const venues = await venueRepo.find()

    const courtRepo = datasource.getRepository(Court)
    const courtList = [...Array(20).keys()].map(num => ({ name: `Court ${num + 1}`, venue: venues[num % venues.length], sport: sports[num % sports.length] }))
    await courtRepo.insert(courtList)
    await datasource.destroy()
}

main()