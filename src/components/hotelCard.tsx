import { Link } from 'react-router';
import { Hotel } from '../types/hotel';

export function HotelCard(hotel: Hotel) {
    const img = getHotelImg(hotel.name);
    return (
        <div key={hotel.id} className="flex-col bg-gray-700 p-4 rounded-lg shadow-md">
            <img src={img} alt={hotel.name} className="w-96 h-72 object-cover" />
            <div className="flex justify-between">
                <div className="flex-col justify-center">
                    <h2 className="text-2xl font-bold">{hotel.name}</h2>
                    <p>Location: {hotel.location}</p>

                    <div className="flex place-items-center">
                        <span className="mx-1 text-xl text-yellow-500">{hotel.rating}</span>
                        {Array.from({ length: hotel.rating }, (_, index) => (
                            <svg key={index} className="h-6 w-6 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 12.928l-4.243 2.485 1.029-4.74L2.93 7.487l4.77-.413L10 2l2.3 4.074 4.77.413-3.856 3.186 1.03 4.74z" clipRule="evenodd" />
                            </svg>
                        ))}
                    </div>
                </div>
                <Link to={`/hotels/${hotel.id}`} className="bg-blue-950 hover:bg-blue-700 hover:text-cyan-300 text-white font-bold py-2 px-4 rounded">
                    <span>
                        Details
                    </span>
                </Link>

            </div>
        </div>
    )
}

function getHotelImg(name: string) {
    return `public/img/hotels/${name.toLowerCase().replace(' ', '')}.jpg`
}
