import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ShowCard from "../components/ShowCard/ShowCard";

const Home = () => {
    const [showsData, setShowsData] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(resData => {
                setShowsData(resData)
            })
    }, [])
    return (
        <Container>
            <Row md={3} className="g-4 my-5">
                {
                    showsData.map(showData => <Col
                        key={showData.show.id}
                    >
                        <ShowCard showData={showData}>
                        </ShowCard>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Home;