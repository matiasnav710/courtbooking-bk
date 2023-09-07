import Court from "../models/court"
import Sport from "../models/sport";
import Venue from "../models/venue";
import datasource from "../start/datasource"


const dummyDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
const courtImages = [
    "https://img.freepik.com/free-photo/basketball-court_1127-3003.jpg?size=626&ext=jpg&ga=GA1.2.1614653405.1688130579&semt=ais",
    "https://img.freepik.com/free-photo/basketball-court-with-wire-fence-around_1127-2199.jpg?w=1800&t=st=1694056691~exp=1694057291~hmac=9746bbaff9fa5222924c4a100dcebcb86d9a9855186f7ad729934bca6be602e1",
    "https://img.freepik.com/free-photo/basketball-court-with-people-fan-sport-arena-render-3d-illustration_654080-1445.jpg?w=2000&t=st=1694056707~exp=1694057307~hmac=388c403c4d617b330ee1a5384bad64ac63b8b6b7ffd2702563d60340385c5d40",
    "https://img.freepik.com/free-vector/basketball-wooden-court-sport-game_18591-51439.jpg?w=826&t=st=1694056729~exp=1694057329~hmac=0e2966660901dac058dc5c3dfc8516e144a158ffa16cdf8e847260f396e28b71"
]

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
        { name: "Sportsplex Arena", address: "234 Sports Lane, Cityville, State 12345", startTime: getDate(8), endTime: getDate(21) },
        { name: "Sunset Sports Club", address: "5678 Sunset Avenue, Townsville, State 67890", startTime: getDate(21), endTime: getDate(5) },
        { name: "Palmview Sports Center", address: "9876 Palm Street, Beachtown, State 54321", startTime: getDate(5), endTime: getDate(13) },
        { name: "Central Park Tennis Club", address: "2468 Park Avenue, Centerville, State 13579", startTime: getDate(13), endTime: getDate(24) },
        { name: "Riverfront Sports Complex", address: "543 River Road, Riverside, State 98765", startTime: getDate(8), endTime: getDate(21) },
    ]
    await venueRepo.insert(venueList)
    const venues = await venueRepo.find()

    const courtRepo = datasource.getRepository(Court)
    const courtList = [
        { name: "Sportsplex Left Center Court", venue: venues[0], sport: sports[0],description:dummyDescription,image:courtImages[0]},
        { name: "Sportsplex Center Court", venue: venues[0], sport: sports[0],description:dummyDescription,image:courtImages[1]},
        { name: "Sportsplex Right Center Court",  venue: venues[0], sport: sports[1],description:dummyDescription,image:courtImages[2]},
        { name: "Sportsplex Back Center Court",  venue: venues[0], sport: sports[1],description:dummyDescription,image:courtImages[3]},

        { name: "Sunset Left Court",  venue: venues[1], sport: sports[0],description:dummyDescription,image:courtImages[0]},
        { name: "Sunset Center Court", venue: venues[1], sport: sports[0],description:dummyDescription,image:courtImages[1]},
        { name: "Sunset Right Court", venue: venues[1], sport: sports[1],description:dummyDescription,image:courtImages[2]},
        { name: "Sunset Back Center Court", venue: venues[1], sport: sports[1],description:dummyDescription,image:courtImages[3]},

        { name: "Palmview Left Center Court", venue: venues[2], sport: sports[0],description:dummyDescription,image:courtImages[0]},
        { name: "Palmview Center Court", venue: venues[2], sport: sports[0],description:dummyDescription,image:courtImages[1]},
        { name: "Palmview Right Center Court", venue: venues[2], sport: sports[1],description:dummyDescription,image:courtImages[2]},
        { name: "Palmview Back Center Court", venue: venues[2], sport: sports[1],description:dummyDescription,image:courtImages[3]},

        { name: "Central Park Left Center Court", venue: venues[3], sport: sports[0],description:dummyDescription,image:courtImages[0]},
        { name: "Central Park Center Court", venue: venues[3], sport: sports[0],description:dummyDescription,image:courtImages[1]},
        { name: "Central Park Right Center Court", venue: venues[3], sport: sports[1],description:dummyDescription,image:courtImages[2]},
        { name: "Central Park Back Center Court", venue: venues[3], sport: sports[1],description:dummyDescription,image:courtImages[3]},

        { name: "Riverfront Left Center Court", venue: venues[4], sport: sports[0],description:dummyDescription,image:courtImages[0]},
        { name: "Riverfront Center Court", venue: venues[4], sport: sports[0],description:dummyDescription,image:courtImages[1]},
        { name: "Riverfront Right Center Court", venue: venues[4], sport: sports[1],description:dummyDescription,image:courtImages[2]},
        { name: "Riverfront Back Center Court", venue: venues[4], sport: sports[1],description:dummyDescription,image:courtImages[3]},
    ]
    await courtRepo.insert(courtList)
    await datasource.destroy()
}

main()