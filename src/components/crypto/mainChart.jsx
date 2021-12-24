import Chart from "react-apexcharts";
import { kFormatter } from "../../utils/formatNumbers";

import TitleCard from '../common/titleCard';

const genSeriesPrices = (data, property) => {
  let dataSeries = new Object
  let newData = data.prices.map(price => price[1].toFixed(3))

  switch (property) {
    case "market_caps":
        newData = data.market_caps.map(price => price[1].toFixed(3))
      break
    case "prices":
        newData = data.prices.map(price => price[1].toFixed(3))
      break
    case "total_volumes":
       newData = data.total_volumes.map(price => price[1].toFixed(3))
      break
    default:
      break
  }
  dataSeries.data = newData
  return dataSeries
}

const genSeriesCategories = (data) => {
  const newData = data.prices.map(price => {
    let date = new Date(price[0])
    let day = date.getDate()
    let month = date.getMonth() + 1

    if (month < 10) {
      month = `0${month}`
    }

    return `${day}/${month}`
  })
  return newData
}

const MainChart = ({dataCoin}) => {

  const options = (titleYAxes) => ({
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: genSeriesCategories(dataCoin),
      tickAmount: 30,
      axisBorder: {
        show: true,
        color: "#0882DF"
      },
      labels: {
        style: {
          colors: "#0882DF",
          fontSize: '13px',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
        }
      }
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#0882DF"
        },
        labels: {
          style: {
            colors: "#0882DF",
            fontSize: '11px',
            fontWeight: 600,
          },
          formatter: (value) => { return kFormatter(value) },
        },
        title: {
          text: titleYAxes,
          style: {
            color: "#fff",
            fontSize: '14px',
            fontWeight: 300,
          }
        }
      },
    ],
    grid: {
      //show: false,
      borderColor: '#17253b',
      row: {
        colors: undefined,
        opacity: 0.7
      },  
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  })


  const series = [genSeriesPrices(dataCoin, "prices")]

  
  console.log('series', series);
  return (
    <div className="crypto__main-chart">
      <TitleCard title={"h4"}>last 90 days</TitleCard>

        <Chart
          options={options("Prices")}
          series={[genSeriesPrices(dataCoin, "prices")]}
          type="line"
          height="400"
          className="crypto__chart"
        />

        <Chart
          options={options("Market caps")}
          series={[genSeriesPrices(dataCoin, "market_caps")]}
          type="line"
          height="400"
          className="crypto__chart"
       />
      
        <Chart
          options={options("Total volumes")}
          series={[genSeriesPrices(dataCoin, "total_volumes")]}
          type="line"
          height="400"
          className="crypto__chart"
        />
    </div>
  );
};

export default MainChart;