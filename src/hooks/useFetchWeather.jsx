import { useQuery } from 'react-query';

const API_WEATHER = import.meta.env.VITE_APP_WEATHERAPI_API_KEY
const API_IP = import.meta.env.VITE_APP_IPINFO_API_KEY
const days = 3 // max days with our plan is 3

const fetchIpInfo = async () => {
  const response = await fetch(`https://ipinfo.io?token=${API_IP}`)
  return response.json()
}

const fetchWeatherInfo = async (apiClient) => {
  if (apiClient !== undefined) {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_WEATHER}&q=${apiClient}&days=${days}&aqi=no&alerts=no`)
    return response.json()
  }
}

const UseFetchWeather = () => {

  const { data: apiClient, isLoading: isLoadingApiClient } = useQuery('ipInfo', fetchIpInfo, {
    staleTime: 60000 * 60, // 1 hora de caché
    notifyOnChangePropsExclusions: ['isStale']
  })
  
  const {data: weatherData, isLoading: isLoadingWeather} = useQuery(['weatherInfo', apiClient?.city], () => fetchWeatherInfo(apiClient.city), {
    staleTime: 60000 * 15, // 15 min de caché
    notifyOnChangePropsExclusions: ['isStale']
  })
  
  const isLoading = isLoadingApiClient && isLoadingWeather

  return {
    weatherData,
    apiClient,
    isLoading
  }
};

export default UseFetchWeather;