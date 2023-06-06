import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ShowCard = ({ showData }) => {
    return (
        <Card>
            <Card.Img variant="top" src={showData?.show?.image?.medium} />
            <Card.Body>
                <Card.Title>{showData?.show?.name}</Card.Title>
                <>
                    <div className='d-flex justify-content-between'>
                        <p>Score : {showData.score.toFixed(1)}</p>
                        <p>Watch Time : {showData.show.averageRuntime > 0 ? showData.show.averageRuntime : 0}</p>
                    </div>
                </>
                <Link to={'/show-details'}><Button variant="primary">View Details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default ShowCard;