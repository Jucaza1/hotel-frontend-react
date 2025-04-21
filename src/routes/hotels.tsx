import { useEffect, useState } from 'react'
import fetchWT from '../services/fetchWithToken'
import { Hotel } from '../types/hotel'
import { HotelCard } from '../components/HotelCard'
import { useNavigate } from 'react-router'

export default function Hotels() {
    const [hotels, setHotels] = useState([] as Hotel[])
    const navigate = useNavigate()
    useEffect(() => {
        const fetchHotels = async () => {
            const response = await fetchWT('/hotels', 'GET')
            if (response.status == 401) {
                navigate("/login")
            }
            const data = await response.json() as Hotel[]
            setHotels(data)
        }
        fetchHotels()
    }, [])
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Hotels</h1>
            <div className="grid grid-cols-1 gap-4">
                {hotels.map(hotel => (
                    <HotelCard key={hotel.id} {...hotel} />
                ))}
            </div>
        </div>
    )
}
  // - **`GET /api/v1/hotels`**
  // - **Description**: Fetches a list of all hotels.
  // - **Handler**: `hotelHandler.HandleGetHotels`.
  // - **Response**:
  //   - Success: 200 OK.
  //   ```json
  //   [
  //     {
  //       "id": "673d37d2a0d5e53e1cebade3",
  //       "name": "Grand Plaza Hotel",
  //       "location": "New York, NY",
  //       "rooms": [
  //         "67156bd2a0d5e53e1ceb3e46",
  //         "5ea56b6b40d5e53e1ce3e4f7",
  //         "156b3e42a0d5e3e41ceb43e4",
  //         "6156b7d2a0d5e53e1ceb3e44"
  //       ],
  //       "rating": 5
  //     }
  //   ]
  //   ```
  //
