import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShowCard from "../../components/Cards/ShowCard/ShowCard";

const Home = () => {
    const [showsData, setShowsData] = useState([]);
    const [seeMore, setSeeMore] = useState(false)
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(resData => {
                seeMore ? setShowsData(resData) : setShowsData(resData.slice(0, 6))
            })
    }, [seeMore])
    return (
        <Container>
            <Row xs={1} md={2} lg={3} className="g-4 my-5">
                {
                    showsData.map(showData => <Col
                        key={showData.show.id}
                    >
                        <ShowCard showData={showData}>
                        </ShowCard>
                    </Col>)
                }
            </Row>
            <div className="mb-5 text-center">
                {
                    showsData.length > 6 ?
                        <button onClick={() => setSeeMore(false)} className="btn btn-primary">See Less</button>
                        : <button onClick={() => setSeeMore(true)} className="btn btn-primary ">See More</button>
                }
            </div>
        </Container>
    );
};

export default Home;