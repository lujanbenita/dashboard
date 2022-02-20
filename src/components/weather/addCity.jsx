import { useState, useRef } from 'react'

const API_WEATHER = import.meta.env.VITE_APP_WEATHERAPI_API_KEY

const fetchWeatherInfo = async (city) => {
  if (city === undefined) return ''
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_WEATHER}&q=${city}&aqi=no&alerts=no`)
  return response.json()
}

const AddCity = () => {
  const [dataCity, setDataCity] = useState()

  const refInput = useRef()

  const handleSearchCity = async () => {
    const response = await fetchWeatherInfo(refInput.current.value)
    setDataCity(response)
  }

  return (
    <div className='card-weather card size-row-4 add-city'>

      <div className='add-city__header'>
        <h3>Add city</h3>
        <input type='text' placeholder='City name' name='city' ref={refInput} />
        <button className='button' onClick={handleSearchCity}>Search </button>
      </div>

      {dataCity?.location
        ? <div className='card-weather card size-row-4'>
          {dataCity !== '' &&
            <>
              <div className='card-weather__top'>
                <div className='card-weather__top--cloud'>
                  <img src='/images/icons/nubes.svg' alt='cloud' />
                  {dataCity.current.cloud}%
                </div>
                <div className='card-weather__top--wind'>
                  <img src='/images/icons/viento.svg' alt='wind' />
                  {dataCity.current.wind_kph}m/s

                </div>
                <div className='card-weather__top--humidity'>
                  <img src='/images/icons/humedad.svg' alt='humidity' />
                  {dataCity.current.humidity}%
                </div>
              </div>

              <div className='card-weather__temp'>
                <div className='card-weather__temp-left'>
                  <div className='card-weather__temp--num'>
                    {dataCity.current.temp_c}
                  </div>
                </div>

                <div className='card-weather__temp-right'>
                  <div className='card-weather__temp-right--c'>
                    ºC
                  </div>
                  <div className='card-weather__temp-right--max'>
                    <img src='/images/icons/high.svg' alt='max' />
                    {dataCity.forecast.forecastday[0].day.maxtemp_c}º
                  </div>
                  <div className='card-weather__temp-right--min'>
                    <img src='/images/icons/low.svg' alt='min' />
                    {dataCity.forecast.forecastday[0].day.mintemp_c}º
                  </div>
                </div>

              </div>

              <div className='card-weather__location'>
                {dataCity.location.name} {' '}
                {dataCity.location.country}
              </div>

              <div className='card-weather__img--sky'>
                {dataCity.current.condition.text}
              </div>

              <div className='card-weather__img-center'>

                {dataCity.current.condition.code === 1000 &&
                  <div className='icon sunny'>
                    <div className='sun'>
                      <div className='rays' />
                    </div>
                  </div>}

                {dataCity.current.condition.code >= 1003 &&
          dataCity.current.condition.code <= 1030 &&
            <div className='icon cloudy'>
              <div className='cloud' />
              <div className='cloud' />
            </div>}

                {dataCity.current.condition.code >= 1066 &&
                dataCity.current.condition.code <= 1114 ||
                dataCity.current.condition.code >= 1204 &&
                dataCity.current.condition.code <= 1237 &&
                  <div className='icon flurries'>
                    <div className='cloud' />
                    <div className='snow'>
                      <div className='flake' />
                      <div className='flake' />
                    </div>
                  </div>}

                {dataCity.current.condition.code >= 1150 &&
                dataCity.current.condition.code <= 1201 ||
                dataCity.current.condition.code >= 1240 &&
                dataCity.current.condition.code <= 1249 &&
                  <div className='icon rainy'>
                    <div className='cloud' />
                    <div className='rain' />
                  </div>}

                {dataCity.current.condition.code >= 1272 &&
                  <div className='icon thunder-storm'>
                    <div className='cloud' />
                    <div className='lightning'>
                      <div className='bolt' />
                      <div className='bolt' />
                    </div>
                  </div>}

              </div>

              <div className='card-weather__duration-day'>
                <div className='card-weather__duration-day--sunrise'>{dataCity.forecast.forecastday[0].astro.sunrise}</div>
                <div className='card-weather__duration-day--sunset'>{dataCity.forecast.forecastday[0].astro.sunset}</div>
              </div>
            </>}
        </div>
        : dataCity?.error?.message
          ? dataCity.error.message
          : ''}
    </div>
  )
}

export default AddCity
