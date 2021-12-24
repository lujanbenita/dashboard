import LayoutDashboard from '../layout/layoutDashboard';

import CurrentWeather from '../components/weather/currentWeather';
import Current24H from '../components/weather/current24H';
import NextDays from '../components/weather/nextDays';
import WeatherIcons from '../components/weather/weatherIcons';
import WeatherMoon from '../components/weather/weatherMoon';
import WeatherAvgInfo from '../components/weather/weatherAvgInfo';
import UseFetchWeather from '../hooks/useFetchWeather';
import Loading from '../components/common/loading';


const Weather = () => {

// https://www.weatherapi.com/my/
  
  const {
    weatherData,
    apiClient,
    isLoading
  } = UseFetchWeather()
  
  return (
    <LayoutDashboard className="flex" title={"WEATHER"}>
      {isLoading || weatherData === undefined || apiClient === undefined ? <Loading />
        :
      <>
        <NextDays weatherData={weatherData}/>

        <CurrentWeather
          weatherData={weatherData}
          apiClient={apiClient}
        />

        <WeatherMoon weatherData={weatherData}/>
    
        <WeatherAvgInfo weatherData={weatherData}/>
    
        <WeatherIcons weatherData={weatherData}/>

        <Current24H weatherData={weatherData}/>
      </>
      }
    </LayoutDashboard>
  );
};

export default Weather;