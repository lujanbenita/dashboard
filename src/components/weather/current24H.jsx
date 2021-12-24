import { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import TitleCard from '../common/titleCard';

const seriesGen = (data, userSelected) => {
  const res = data.forecast.forecastday[0].hour.map(item => {
    if ("temp_c" === userSelected) {
      return item.temp_c
    } 
    if ("wind_kph" === userSelected) {
      return item.wind_kph
    } 
    if ("feelslike_c" === userSelected) {
      return item.feelslike_c
    } 
    if ("humidity" === userSelected) {
      return item.humidity
    } 
    if ("will_it_rain" === userSelected) {
      return item.will_it_rain
    } 
  }) 
  return res
}

const prefixed = (userSelected) => {
  if ("temp_c" === userSelected) {
    return "°C"
  } 
  if ("wind_kph" === userSelected) {
    return "km/h"
  } 
  if ("feelslike_c" === userSelected) {
    return "°C"
  } 
  if ("humidity" === userSelected) {
    return "%"
  } 
  if ("will_it_rain" === userSelected) {
    return "yes"
  } 
}

const Current24H = ({weatherData}) => {
  
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
      id: "basic-bar",
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + "º";
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#36a2eb"]
      }
    },
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: '70%',
      }
    },
    tooltip: {
      fillSeriesColor: true,
      custom: function({series, seriesIndex, dataPointIndex, w}) {

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
            colors: "#ff6384",
            fontSize: '13px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 500,
        },
      },
    },
    yaxis: {
       labels: {
        show: true,
        style: {
            colors: "#ff6384",
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 500,
        },
      },
    },
    theme: {
      palette: 'palette1' // upto palette10
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    }
  }

  return (
    <div className="card-weather-24h card size-row-12">
      <TitleCard>Current 24h</TitleCard>
      <div className="">
        <button onClick={() => setUserSelectedOption('temp_c')}> Temp </button>
        <button onClick={() => setUserSelectedOption('feelslike_c')}> Feels Like </button>
        <button onClick={() => setUserSelectedOption('humidity')}> Humidity </button>
        <button onClick={() => setUserSelectedOption('wind_kph')}> wind </button>
        <button onClick={() => setUserSelectedOption('will_it_rain')}> will rain? </button>
      </div>
      {series !== undefined &&
        <Chart
          options={options}
          series={series}
          type="bar"
          width= "100%"
          height="450"
        />
      }
    </div>
  );
};

export default Current24H;