import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import TitleCard from '../common/titleCard'

const seriesGen = (data, userSelected) => {
  const res = data.forecast.forecastday[0].hour.map(item => {
    if (userSelected === 'temp_c') {
      return item.temp_c
    }
    if (userSelected === 'wind_kph') {
      return item.wind_kph
    }
    if (userSelected === 'feelslike_c') {
      return item.feelslike_c
    }
    if (userSelected === 'humidity') {
      return item.humidity
    }
    if (userSelected === 'will_it_rain') {
      return item.will_it_rain
    }
  })
  return res
}

const prefixed = (userSelected) => {
  if (userSelected === 'temp_c') {
    return '°C'
  }
  if (userSelected === 'wind_kph') {
    return 'km/h'
  }
  if (userSelected === 'feelslike_c') {
    return '°C'
  }
  if (userSelected === 'humidity') {
    return '%'
  }
  if (userSelected === 'will_it_rain') {
    return 'yes'
  }
}

const Current24H = ({ weatherData }) => {
  const [userSelectedOption, setUserSelectedOption] = useState('temp_c')
  const [series, setSeries] = useState()

  useEffect(() => {
    setSeries([{
      data: seriesGen(weatherData, userSelectedOption),
      name: prefixed(userSelectedOption)
    }])
  }, [userSelectedOption])

  const categoriesGen = (data) => {
    const res = data.forecast.forecastday[0].hour.map(item => {
      let date = item.time
      date = date.split(' ')[1]
      return date
    })
    return res
  }

  const options = {
    chart: {
      id: 'basic-bar'
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + 'º'
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#36a2eb']
      }
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: '70%'
      }
    },
    tooltip: {
      fillSeriesColor: true,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return '<div className="arrow_box" style="padding: 10px;color: black;">' +
          '<span style="font-weight: 600;opacity: 0.5;">' + w.globals.labels[dataPointIndex] + '</span>' +
          '<span style="font-weight: 700;opacity: 0.8; color:#ff6384"> | ' + series[seriesIndex][dataPointIndex] + w.globals.seriesNames[0] + '</span>' +
          '</div>'
      }
    },
    xaxis: {
      type: 'category',
      categories: categoriesGen(weatherData),
      labels: {
        show: true,
        style: {
          colors: '#ff6384',
          fontSize: '13px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 500
        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: '#ff6384',
          fontSize: '12px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 500
        }
      }
    },
    theme: {
      palette: 'palette1' // upto palette10
    },
    grid: {
      show: false
    },
    legend: {
      show: false
    }
  }

  return (
    <div className='card-weather-24h card size-row-12'>
      <TitleCard>Current 24h</TitleCard>
      <div className=''>
        <button
          className={userSelectedOption === 'temp_c' ? 'active' : ''}
          onClick={() => setUserSelectedOption('temp_c')}
        > Temp
        </button>
        <button
          className={userSelectedOption === 'feelslike_c' ? 'active' : ''}
          onClick={() => setUserSelectedOption('feelslike_c')}
        > Feels Like
        </button>
        <button
          className={userSelectedOption === 'humidity' ? 'active' : ''}
          onClick={() => setUserSelectedOption('humidity')}
        > Humidity
        </button>
        <button
          className={userSelectedOption === 'wind_kph' ? 'active' : ''}
          onClick={() => setUserSelectedOption('wind_kph')}
        > wind
        </button>
        <button
          className={userSelectedOption === 'will_it_rain' ? 'active' : ''}
          onClick={() => setUserSelectedOption('will_it_rain')}
        > will rain?
        </button>
      </div>
      {series !== undefined &&
        <Chart
          options={options}
          series={series}
          type='bar'
          width='100%'
          height='450'
        />}
    </div>
  )
}

export default Current24H
