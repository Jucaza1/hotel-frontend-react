import { useState, useEffect } from "react"
import fetchWT from "../services/fetchWithToken"
import { Link, useParams } from "react-router"

export function HotelDetails() {
    const params = useParams()
    const [hotel, setHotel] = useState(
        {
            id: "673d37d2a0d5e53e1cebade3",
            name: "Grand Plaza Hotel",
            location: "New York, NY",
            rooms: [
                "67156bd2a0d5e53e1ceb3e46",
                "5ea56b6b40d5e53e1ce3e4f7",
                "156b3e42a0d5e3e41ceb43e4",
                "6156b7d2a0d5e53e1ceb3e44"
            ],
            rating: 5
        })
    useEffect(() => {
        async function fetchHotel() {
            const response = await fetchWT(`/hotels/${params.id}`, "GET")
            const hotelData = await response.json()
            //TODO check response
            if (!hotelData) {
                console.log("error fetching the hotel")
            }
            setHotel(hotelData)
        }
        fetchHotel()
    }, [params])
    return (
        <div>
            <h1>{hotel.name}</h1>
            <p>Location: {hotel.location}</p>
            <p>Rating: {hotel.rating}</p>
            <h2>Rooms</h2>
            <ul>
                {hotel.rooms.map((roomId) => (
                    <li key={roomId}>
                        <Link to={`/rooms/${roomId}`}>
                            {roomId}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
type Hotel = {
    id: string,
    name: string,
    location: string,
    rooms: string[],
    rating: number
}
