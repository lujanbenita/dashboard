import TitleCard from '../common/titleCard';

const WeatherAvgInfo = ({weatherData}) => {
  return (
    <div className="card-weather-icons card size-row-8">
      <TitleCard>General weather info next days</TitleCard>
      <div className="card-weather-icons__row">
        <div className="red">daily chance of rain: {weatherData.forecast.forecastday[0].day.daily_chance_of_rain}</div>
        <div className="red">daily chance of rain: {weatherData.forecast.forecastday[1].day.daily_chance_of_rain}</div>
        <div className="red">daily chance of rain: {weatherData.forecast.forecastday[2].day.daily_chance_of_rain}</div>
      </div>
      <div className="card-weather-icons__row">
        <div className="blue">Total precipitation: {weatherData.forecast.forecastday[0].day.totalprecip_mm}mm</div>
        <div className="blue">Total precipitation: {weatherData.forecast.forecastday[1].day.totalprecip_mm}mm</div>
        <div className="blue">Total precipitation: {weatherData.forecast.forecastday[2].day.totalprecip_mm}mm</div>
      </div>
      <div className="card-weather-icons__row">
        <div className="green">Avg humidity: {weatherData.forecast.forecastday[0].day.avghumidity}</div>
        <div className="green">Avg humidity: {weatherData.forecast.forecastday[1].day.avghumidity}</div>
        <div className="green">Avg humidity: {weatherData.forecast.forecastday[2].day.avghumidity}</div>
      </div>
      <div className="card-weather-icons__row">
        <div className="yellow">{weatherData.forecast.forecastday[0].date}</div>
        <div className="yellow">{weatherData.forecast.forecastday[1].date}</div>
        <div className="yellow">{weatherData.forecast.forecastday[2].date}</div>
      </div>
    </div>
  );
};

export default WeatherAvgInfo;