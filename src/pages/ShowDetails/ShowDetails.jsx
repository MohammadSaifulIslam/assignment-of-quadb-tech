import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ShowDetailsCard from "../../components/Cards/ShowDetailsCard/ShowDetailsCard";

const ShowDetails = () => {
    const [showDetailsData, setShowDetailsData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(res => res.json())
            .then(resData => {
                const findData = resData.find(data => data.show.id === parseInt(id))
                setShowDetailsData(findData)
            })
    }, [id])

    console.log(showDetailsData)
    console.log(id)
    return (
        <Container className="my-5">
            <ShowDetailsCard showDetailsData={showDetailsData}/>
        </Container>
    );
};

export default ShowDetails;