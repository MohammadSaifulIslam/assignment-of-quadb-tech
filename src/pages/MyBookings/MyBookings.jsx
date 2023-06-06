import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { getDataFromDb, removeItemFromDb } from "../../utility/localstorage";
const MyBookings = () => {
    const [bookingsData, setBookingsData] = useState([]);

    const handleRemoveBooking = id => {
        removeItemFromDb(id)
    }

    useEffect(() => {
        const dataFromLS = getDataFromDb();
        setBookingsData(dataFromLS)
    }, [])
    return (
        <Container>
            <div className="w-50 mx-auto my-5">
                {
                    bookingsData.map(booking => <div key={booking.id}>
                        <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                            <img src={booking.image} alt="show name " className="rounded" width={100} height={100} />
                            <div className="flex-grow-1">
                                <h4>{booking.show_name}</h4>
                                <p>Ticket: {booking.ticket_quantity}</p>
                            </div>
                            <FaTrashAlt onClick={() => handleRemoveBooking(booking.id)} className="text-danger" style={{ cursor: 'pointer', width: '30px', height: '30px' }}></FaTrashAlt>
                        </div>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default MyBookings;