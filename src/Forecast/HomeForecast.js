import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";

function HomeForecast() {
    const url = "https://api.weatherapi.com/v1/current.json?key=bcdefa17d9b7477db50225739221805&q=73106";
    const [weatherData, setWeatherData] = useState({});

    async function getWeatherData() {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
    }

    useEffect(() => {
        getWeatherData();
    }, []);

    if(!weatherData.current) {
        return <p>loading...</p>;
    }

    return (
        <div>
            <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                <Row>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Current Weather for {weatherData.location.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Date: {weatherData.current.last_updated}</Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li><img src={weatherData.current.condition.icon}></img></li>
                                    <li>Temp: {weatherData.current.temp_f}</li>
                                    <li>Wind Speed: {weatherData.current.condition.wind_mph}</li>
                                    <li>Precipitation: {weatherData.current.condition.precip_in}</li>
                                    <li>{weatherData.current.condition.text}</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </div>
    )
}

export default HomeForecast;