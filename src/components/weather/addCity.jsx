import { useState, useRef } from 'react'
import CurrentWeather from './currentWeather'

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
        ? <CurrentWeather weatherData={dataCity} />
        : dataCity?.error?.message
          ? dataCity.error.message
          : ''}
    </div>
  )
}

export default AddCity
