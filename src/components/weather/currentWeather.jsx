import { currentSeason } from '../../utils/currentSeason'

const CurrentWeather = ({ weatherData, apiClient }) => {
  let backgroundImage = currentSeason().url

  if (!apiClient) {
    backgroundImage = ''
  }

  return (
    <div className='card-weather card size-row-4' style={{ backgroundImage: backgroundImage }}>
      {weatherData !== '' && <>
        <div className='card-weather__top'>
          <div className='card-weather__top--cloud'>
            <img src='/images/icons/nubes.svg' alt='cloud' />
            {weatherData.current.cloud}%
          </div>
          <div className='card-weather__top--wind'>
            <img src='/images/icons/viento.svg' alt='wind' />
            {weatherData.current.wind_kph}m/s

          </div>
          <div className='card-weather__top--humidity'>
            <img src='/images/icons/humedad.svg' alt='humidity' />
            {weatherData.current.humidity}%
          </div>
        </div>

        <div className='card-weather__temp'>
          <div className='card-weather__temp-left'>
            <div className='card-weather__temp--num'>
              {weatherData.current.temp_c}
            </div>
          </div>

          <div className='card-weather__temp-right'>
            <div className='card-weather__temp-right--c'>
              ºC
            </div>
            <div className='card-weather__temp-right--max'>
              <img src='/images/icons/high.svg' alt='max' />
              {weatherData.forecast.forecastday[0].day.maxtemp_c}º
            </div>
            <div className='card-weather__temp-right--min'>
              <img src='/images/icons/low.svg' alt='min' />
              {weatherData.forecast.forecastday[0].day.mintemp_c}º
            </div>
          </div>

        </div>

        <div className='card-weather__location'>
          {apiClient
            ? `${apiClient.city} ${apiClient.country}`
            : `${weatherData.location.name} ${weatherData.location.country}`}
        </div>

        <div className='card-weather__img--sky'>
          {weatherData.current.condition.text}
        </div>

        <div className='card-weather__img-center'>

          {weatherData.current.condition.code === 1000 &&
            <div className='icon sunny'>
              <div className='sun'>
                <div className='rays' />
              </div>
            </div>}

          {weatherData.current.condition.code >= 1003 &&
          weatherData.current.condition.code <= 1030 &&
            <div className='icon cloudy'>
              <div className='cloud' />
              <div className='cloud' />
            </div>}

          {weatherData.current.condition.code >= 1066 && weatherData.current.condition.code <= 1114 ||
          weatherData.current.condition.code >= 1204 && weatherData.current.condition.code <= 1237 &&
            <div className='icon flurries'>
              <div className='cloud' />
              <div className='snow'>
                <div className='flake' />
                <div className='flake' />
              </div>
            </div>}

          {weatherData.current.condition.code >= 1150 && weatherData.current.condition.code <= 1201 ||
            weatherData.current.condition.code >= 1240 && weatherData.current.condition.code <= 1249 &&
              <div className='icon rainy'>
                <div className='cloud' />
                <div className='rain' />
              </div>}

          {weatherData.current.condition.code >= 1272 &&
            <div className='icon thunder-storm'>
              <div className='cloud' />
              <div className='lightning'>
                <div className='bolt' />
                <div className='bolt' />
              </div>
            </div>}

        </div>

        <div className='card-weather__duration-day'>
          <div className='card-weather__duration-day--sunrise'>{weatherData.forecast.forecastday[0].astro.sunrise}</div>
          <div className='card-weather__duration-day--sunset'>{weatherData.forecast.forecastday[0].astro.sunset}</div>
        </div>
                             </>}
    </div>
  )
}

export default CurrentWeather
