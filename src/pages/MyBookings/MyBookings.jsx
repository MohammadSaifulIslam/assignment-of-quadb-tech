import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { getDataFromDb, removeItemFromDb } from "../../utility/localstorage";
const MyBookings = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [bookingsData, setBookingsData] = useState([]);

    const handleRemoveBooking = id => {
        removeItemFromDb(id)
        toast.success('Your Canceled The Booking Ticket')
        const dataFromLS = getDataFromDb();
        setBookingsData(dataFromLS)
    }
    
    useEffect(() => {
        const dataFromLS = getDataFromDb();
        setBookingsData(dataFromLS)
        setIsLoading(false)
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }
    return (
        <Container>
            <div className="w-50 mx-auto my-5">
                {
                    bookingsData.length > 0 ? bookingsData.map(booking => <div key={booking.id}>
                        <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
                            <img src={booking.image} alt="show name " className="rounded" width={100} height={100} />
                            <div className="flex-grow-1">
                                <h4>{booking.show_name}</h4>
                                <p>Ticket: {booking.ticket_quantity}</p>
                            </div>
                            <FaTrashAlt onClick={() => handleRemoveBooking(booking.id)} className="text-danger" style={{ cursor: 'pointer', width: '30px', height: '30px' }}></FaTrashAlt>
                        </div>
                    </div>)
                        : <div className="text-center">
                            <h4>You haven't any booking.</h4>
                            <Link to={'/'}><button className="btn btn-primary">Book Now</button></Link>
                        </div>
                }
            </div>
        </Container>
    );
};

export default MyBookings;