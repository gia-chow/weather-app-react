import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

function SingleDayForecastCard(props) {
        return (
            <div>
                <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 20 }}>
                    <Row>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Weather for {props.locationName}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Date: {props.date}</Card.Subtitle>
                                <Card.Text>
                                    <ul>
                                        <li><img src={props.iconUrl}></img></li>
                                        <li>Average Temp: {props.averageTemp}</li>
                                        <li>Max Temp: {props.maxTemp}</li>
                                        <li>Min Temp: {props.minTemp}</li>
                                        <li>{props.condition}</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                </div>
            </div>
            )
    }

export default SingleDayForecastCard;