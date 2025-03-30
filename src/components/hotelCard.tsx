
import { Hotel } from '../types/hotel';

export function HotelCard(hotel: Hotel) {
    const img = getHotelImg(hotel.name);
    return (
        <div key={hotel.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <img src={img} alt={hotel.name} className="w-96 h-72 object-cover" />
            <div className="flex justify-center">
                <h2 className="text-2xl font-bold">{hotel.name}</h2>
                <p>Location: {hotel.location}</p>
                <p>Rating: {hotel.rating}</p>
            </div>
        </div>
    )
}
