import { useEffect, useState } from 'react';

import dayjs from 'dayjs';
import Chart from "react-apexcharts";

import { DATA_DAILY_SLEEP_TRACKER } from '../../data/dataDailySleepTracker';

import {freeTimeCalculate} from '../../utils/freeTimeCalculate.js'

let currentDay = dayjs()
currentDay = `${currentDay.$D}/${currentDay.$M}`

const getPercentage = (totalSleep, totalFreetime, totalWork ) => {
  const sleepPercentage = totalSleep * 100 / (totalFreetime + totalSleep + totalWork)
  const workPercentage = totalWork * 100 / (totalWork + totalSleep + totalWork)
  const freeTimepPercentage = totalFreetime * 100 / (totalFreetime + totalSleep + totalWork)

  return [sleepPercentage,workPercentage,freeTimepPercentage ]
}

const getSevenLastDays = (data, days) => {
  console.log('data', data);
  console.log('data', data[0].data.length);

  let sleep = data[0].data.slice(-days)
  let work = data[1].data.slice(-days)
  let freetime = freeTimeCalculate(data).data.slice(-7)

  let totalSleep = 0
  for (const number of sleep) {
    totalSleep += number
  }

  let totalWork = 0
  for (const number of work) {
    totalWork += number
  }

  let totalFreetime = 0
  for (const number of freetime) {
    totalFreetime += number
  }

  return {totalSleep, totalWork, totalFreetime}
}

const genSeries = (data, update, days) => {
  let { totalSleep, totalFreetime, totalWork } = getSevenLastDays(data, days)

  if (update) {
    totalSleep += update[0].data
    totalWork += update[1].data
    totalFreetime += update[2].data
  }

  return getPercentage(totalSleep, totalFreetime, totalWork)
}


const DonutsChart = ({registerDate,days}) => {
  
  const [refresh, setRefresh] = useState(false)
  const [series, setSeries] = useState(genSeries(DATA_DAILY_SLEEP_TRACKER, false, days))
  console.log('DATA_DAILY_SLEEP_TRACKER', DATA_DAILY_SLEEP_TRACKER);
  
  useEffect(() => {
    if (registerDate !== null) {
      setSeries(genSeries(DATA_DAILY_SLEEP_TRACKER, registerDate, days))
      setRefresh(!refresh)
    }
  }, [registerDate])


  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Sleeping', 'Working', 'Free time'],
    stroke:{
     width: 1,
    },
    legend: {
      labels: {
        colors:["white"]
      }
    },
    title: {
      text: `Last ${days} days`,
      style: {
        fontSize: '14px',
        fontWeight: 600,
        fontFamily: 'Helvetica, Arial, sans-serif',
        color: '#00e396'
      },
    },
    tooltip: {
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        return '<div style="padding: 10px">' +
          '<span>' + w.config.labels[seriesIndex] + '</span>' +
          '</div>'
      }
    }
  };


  return (
    <div className="card-donuts">

      {series !== undefined &&
        <Chart
          options={options}
          series={series}
          type="donut"
          height="250"
          width="350"
        />
      }
    </div>
  );
};

export default DonutsChart;