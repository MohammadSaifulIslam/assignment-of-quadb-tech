import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ShowCard = ({ showData }) => {
    return (
        <Card>
            <Card.Img variant="top" src={showData?.show?.image?.medium} />
            <Card.Body>
                <Card.Title><h2>{showData?.show?.name}</h2></Card.Title>
                <>
                    <div className='d-flex justify-content-between'>
                        <p><span className="fw-medium">Score:</span> {showData?.score?.toFixed(1)}</p>
                        <p><span className="fw-medium">Watch Time: </span>
                            {showData.show?.averageRuntime > 0 ? showData.show?.averageRuntime : 0}min
                        </p>
                    </div>
                </>
                <Link to={`/show-details/${showData.show.id}`}><Button variant="primary">View Details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default ShowCard;