import { memo } from 'react';

import { useQuery } from 'react-query';
import Chart from "react-apexcharts";

import TitleCard from '../common/titleCard';
import { formatNumberThousands } from '../../utils/formatNumbers';
import Title from './atoms/title';

const dataSeries = (data) => {
  let cases = []
  let deaths = []
  let recovered = []
  for (let index = 0; index < 180; index++) {
    const resCases = Object.values(data.timeline.cases)[index]
    const resDeaths = Object.values(data.timeline.deaths)[index]
    const resRecovered = Object.values(data.timeline.recovered)[index]
    cases.push(resCases)
    deaths.push(resDeaths)
    recovered.push(resRecovered)
  }

  return [{
      name: "cases",
      data: cases
    },
    {
      name: "deaths",
      data: deaths
    },
    {
      name: "recovered",
      data: recovered
  }]
}

const dataCategories = (data) => {
  let mySeries = []
  for (let index = 0; index < 365; index++) {
    const element = Object.keys(data.timeline.cases)[index]
    mySeries.push(element)
  }
  return mySeries
}

// const series = () => dataSeries(data)

const chartOptions = (data) => ({
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
        '<span style="font-weight: 600;opacity: 0.5;">' + w.globals.categoryLabels[dataPointIndex] + '</span>' +
        '<span style="font-weight: 700;opacity: 0.8; color:#ff6384"> | ' + formatNumberThousands(series[seriesIndex][dataPointIndex])+' '+ w.globals.seriesNames[seriesIndex ] + '</span>' +
        '</div>'
    }
  },
  xaxis: {
    type: 'category',
    categories: dataCategories(data),
    tickAmount: 30,
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
})

const fetchCovidHistorical = async () => {
  const res = await fetch(`https://corona.lmao.ninja/v2/historical/spain?lastdays=180`)
  const response = await res.json()
  return response
}

const CovidChartYear = () => {

  const {data} = useQuery("covidHistorical", fetchCovidHistorical, {
    staleTime: 60000 * 60, // 1 hora de caché
    notifyOnChangePropsExclusions: ['isStale']
  })

  return (
    <div className="card-covid card size-row-12">
      <Title>Spain last 6 mounth</Title>
      {data !== undefined &&
        <Chart
        options={chartOptions(data)}
        series={dataSeries(data)}
        type="area"
        height="450"
        />
      }
    </div>
  );
};

export default memo(CovidChartYear);