import { Link } from "react-router-dom";

const ShowDetailsCard = ({ showDetailsData }) => {
    return (
        <div>
            <div className="card mb-3 px-4">
                <div className="row g-0 g-4">
                    <div className="col-md-5 py-4">
                        <img src={showDetailsData.show?.image?.original} className="img-fluid rounded-start " alt="Show image" />
                    </div>
                    <div className="col-md-7 d-flex align-items-center">
                        <div className="card-body">
                            <h2 className="card-title">Name: {showDetailsData.show?.name}</h2>

                            <p><span className="fw-medium">Language:</span>  {showDetailsData.show?.language}</p>

                            <p><span className="fw-medium">Genres:</span> {showDetailsData.show?.genres?.map((genre, index) => <span
                                key={index}
                            >{index + 1}.{genre} </span>)}</p>
                            <p><span className="fw-medium">Status:</span> {showDetailsData.show?.status}</p>

                            <div className='d-flex justify-content-between'>
                                <p><span className="fw-medium">Watch Time: </span> {showDetailsData.show?.averageRuntime > 0 ? showDetailsData.show?.averageRuntime : 0}min</p>
                                <p><span className="fw-medium">Score:</span> {showDetailsData?.score?.toFixed(1)}</p>
                            </div>

                            <div><span className="fw-semibold">Schedule </span>
                                {showDetailsData.show?.schedule?.time ?
                                    <div className="d-flex justify-content-between">

                                        <p><span className="fw-medium">Day:</span> {showDetailsData.show?.schedule?.days?.map((day, index) => <span key={index}> {day}</span>)}</p>

                                        <p><span className="fw-medium">Time:</span> {showDetailsData.show?.schedule?.time}</p>
                                    </div>
                                    : <p>Not available</p>
                                }
                            </div>
                            <p className="card-text"><span className="fw-medium">Summary:</span> {showDetailsData.show?.summary}</p>

                            {
                                showDetailsData.show?.status === "Ended" ?
                                    <Link to={'/'}> <button className="btn btn-primary">Back To Home</button></Link>
                                    : <button className="btn btn-primary">Book A Ticket</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowDetailsCard;