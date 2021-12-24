import TitleCard from '../common/titleCard';

const WeatherIcons = ({weatherData}) => {
  return (
    <div className="card-weather-icons card size-row-8">
      <TitleCard>General weather next days</TitleCard>
      <div className="card-weather-icons__row">
        <div className=""><img src={weatherData.forecast.forecastday[0].day.condition.icon} alt=""/></div>
        <div className=""><img src={weatherData.forecast.forecastday[1].day.condition.icon} alt=""/></div>
        <div className=""><img src={weatherData.forecast.forecastday[2].day.condition.icon} alt=""/></div>
      </div>
      <div className="card-weather-icons__row">
        <div className="red">{weatherData.forecast.forecastday[0].day.condition.text}</div>
        <div className="red">{weatherData.forecast.forecastday[1].day.condition.text}</div>
        <div className="red">{weatherData.forecast.forecastday[2].day.condition.text}</div>
      </div>
      <div className="card-weather-icons__row">
        <div className="blue">{weatherData.forecast.forecastday[0].date}</div>
        <div className="green">{weatherData.forecast.forecastday[1].date}</div>
        <div className="yellow">{weatherData.forecast.forecastday[2].date}</div>
      </div>
    </div>
  );
};

export default WeatherIcons;