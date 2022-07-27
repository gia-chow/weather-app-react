import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function Astronomy () {
    const url ="https://api.weatherapi.com/v1/astronomy.json?key=bcdefa17d9b7477db50225739221805&q=73106&dt=2022-07-09";
    const [astronomyData, setAstronomyData] = useState({});

    async function getAstronomyData() {
        const response = await fetch (url);
        const data = await response.json();
        setAstronomyData(data);
    }

    useEffect(() => {
        getAstronomyData();
    }, []);
    
    if(!astronomyData.astronomy) {
        return <p>loading...</p>;
    }

    return(
        <>
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{astronomyData.location.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Local Time: {astronomyData.location.localtime}</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Sunrise: {astronomyData.astronomy.astro.sunrise}</li>
                                    <li>Sunset: {astronomyData.astronomy.astro.sunset}</li>
                                    <li>Moonrise: {astronomyData.astronomy.astro.moonrise}</li>
                                    <li>Moonset: {astronomyData.astronomy.astro.moonset}</li>
                                    <li>Moon Phase: {astronomyData.astronomy.astro.moon_phase}</li>
                                    <li>Moon Illumination: {astronomyData.astronomy.astro.moon_illumination}</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </>
    )
}

export default Astronomy;