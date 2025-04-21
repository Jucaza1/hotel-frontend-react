import {useState, useEffect} from 'react';
import fetchWT from '../services/fetchWithToken';
import {useParams} from 'react-router';

    // {
    //   "id": "5ea56b6b40d5e53e1ce3e4f7",
    //   "size": "Large",
    //   "price": 150.0,
    //   "hotelID": "673d37d2a0d5e53e1cebade3"
    // }
export function RoomDetails() {
    const params = useParams();
    const [room, setRoom] = useState({
        id: '5ea56b6b40d5e53e1ce3e4f7',
        size: 'Large',
        price: 150.0,
        hotelID: '673d37d2a0d5e53e1cebade3'
    });

    useEffect(() => {
        async function fetchRoom() {
            const response = await fetchWT(`/rooms/${params.id}`, 'GET');
            const roomData = await response.json();
            //TODO check response
            if (!roomData) {
                console.log('error fetching the room');
            }
            setRoom(roomData);
        }
        fetchRoom();
    }, [params]);

    return (
        <div>
            <h1>{room.size}</h1>
            <p>Price: {room.price}</p>
            <p>Hotel ID: {room.hotelID}</p>
        </div>
    );
}
