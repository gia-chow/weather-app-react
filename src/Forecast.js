
function Forecast(props) {
    return (
    <>
        {props.weatherData.location?.name && (
        <div>
            <h3>City</h3>
            <p>{props.weatherData.location.name}</p>
        </div>
        )}
    </>
    )
}

export default Forecast