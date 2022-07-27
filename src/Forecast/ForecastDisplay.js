import SingleDayForecastCard from './SingleDayForecastCard';
import Col from 'react-bootstrap/Col';

function ForecastDisplay(props) {
    if (!props.weatherData.location?.name) {
        return <></>
    } else {
        const locationName = props.weatherData.location.name;
        const allForecastCards = props.weatherData.forecast.forecastday.map(forecast => {
            const date = forecast.date;
            const averageTemp = forecast.day.avgtemp_f;
            const maxTemp = forecast.day.maxtemp_f;
            const minTemp = forecast.day.mintemp_f;
            const iconUrl = forecast.day.condition.icon;
            const condition = forecast.day.condition.text;

            return (
            <SingleDayForecastCard 
                locationName={locationName}
                date={date}
                averageTemp={averageTemp}
                maxTemp={maxTemp}
                minTemp={minTemp}
                iconUrl={iconUrl}
                condition={condition}
            ></SingleDayForecastCard>
            )
        })

        return (
            <div>
                <Col className="d-flex">
                    {allForecastCards}
                </Col>
            </div>
            )
    }
}

export default ForecastDisplay;