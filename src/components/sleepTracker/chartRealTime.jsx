import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import Chart from "react-apexcharts";

import { DATA_DAILY_SLEEP_TRACKER } from '../../data/dataDailySleepTracker';
import { useDispatch } from 'react-redux';
import { isCurrentDay } from '../../redux/user/userAction';

import {freeTimeCalculate} from '../../utils/freeTimeCalculate.js'

let currentDay = dayjs()
currentDay= `${currentDay.$D}/${currentDay.$M}`
  
const ChartRealTime = ({registerDate}) => {
  const dispatch = useDispatch()

  const [markers, setMarkers] = useState({size: 0, strokeWidth: 0})
  const [refresh, setRefresh] = useState(false)
  const [stacked, setStacked] = useState(false)
  const [series, setSeries] = useState(DATA_DAILY_SLEEP_TRACKER)

  useEffect(() => {
    setSeries([
      ...series,
      freeTimeCalculate(series)
    ])
  },[])

  useEffect(() => {
    if (registerDate !== null) {
      let updateSeries = series
      for (let index = 0; index < updateSeries.length; index++) {
        const newData = registerDate.find(el => el.name === updateSeries[index].name)
        updateSeries[index].data.push(newData.data)
      }
      setSeries(updateSeries)
      setRefresh(!refresh)
    }
  }, [registerDate, series])

  const categoriesSeries = () => {
    let howManyDays = 14
    let arrayCategories = []
    for (let index = 0; index < howManyDays; index++) {
      let dayManipulate = dayjs().subtract(index, 'day')
      dayManipulate = `${dayManipulate.$D}/${dayManipulate.$M}`
      arrayCategories.unshift(dayManipulate)
    }
    return arrayCategories
  }

  const options = {
    series,
    chart: {
      height: 350,
      type: refresh,
      stacked: stacked, //sum data series
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    stroke: {
      curve: 'straight',
      width: 6,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: categoriesSeries(),
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
      title: {
        text: "Hours",
        rotate: -90,
        style: {
          color: "#00e396",
          fontSize: '14px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 600,
        },
      },
      max: 24,
      min:0,
      labels: {
        show: true,
        style: {
          colors: "#ff6384",
          fontSize: '15px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 500,
        },
        formatter: (value) => {
          let updatevalue = value.toString()
          updatevalue = updatevalue.split(".")[0]
          return updatevalue
        },
      },
    },
    title: {
      text: '',
    },
    legend: {
      fontSize: '18px',
      show: true,
      labels: {
        useSeriesColors: true
      },
    },
    tooltip: {
      fillSeriesColor: true,
      style: {
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
      },
    },
    markers: {
      size: markers.size,
      strokeWidth: markers.strokeWidth,
      hover: {
        size: 0
      }
    },
  }

  const handleMarkers = () => {
    if (markers.size === 0) {
      setMarkers({
        size: 5,
        strokeWidth: 2,
      })
    } else {
      setMarkers({
        size: 0,
        strokeWidth: 0,
      })
    }
  }

  return (
    <div className="card-weather-24h  size-row-12">
      {series !== undefined &&
        <Chart
          options={options}
          series={series}
          type="line"
          height="450"
        />
      }
      <button onClick={() => setStacked(!stacked)} > Stacked type </button>
      <button onClick={handleMarkers} > Markers </button>
    </div>
  );
};

export default ChartRealTime;