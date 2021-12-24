import Chart from "react-apexcharts";
import TitleCard from '../common/titleCard';

const NextDays = ({weatherData}) => {

  const categoriesGen = (data) => {
    const res = data.forecast.forecastday.map(item => {
      let date = item.date
      return date
    })
    return res
  } 

  const options = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val + "º";
      },
      offsetY: -22,
      style: {
        fontSize: '12px',
        colors: ["#FFF"]
      }
    },
    
    plotOptions: {
      bar: {
        distributed: true,
        columnWidth: '70%',
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    tooltip: {
      fillSeriesColor: true,
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        return '<div className="arrow_box" style="padding: 10px;color: black;">' +
          '<span style="font-weight: 700;opacity: 0.8; color:#ff6384">' + w.globals.seriesNames[seriesIndex] + '</span>' +
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
      show: true,
      fontSize: '14px',
      fontWeight: 500,
      labels: {
          colors: undefined,
          useSeriesColors: true
      },
    }
  }

  const genSeries = (data) => {
    const res = data.forecast.forecastday.map(item => {
      return ({
        name: item.date,
        data: [item.day.avgtemp_c, item.day.maxtemp_c, item.day.mintemp_c]
      })
    })

    let data1 = []
    let data2 = []
    let data3 = []
    res.map(item => {
      data1.push(item.data[0])
      data2.push(item.data[1])
      data3.push(item.data[2])
      return
    })
    const response = [
      {
        name: 'avg temp',
        data: data1
      },
      {
        name: 'Max temp',
        data: data2
      },
      {
        name: 'Min temp',
        data: data3
      },
    ]
    return response
  }
  genSeries(weatherData)

  const series = genSeries(weatherData)


  return (
    <div className="card-weather__next-day card size-row-4">
      <TitleCard>Temp Next days</TitleCard>
      <Chart
        options={options}
        series={series}
        type="bar"
        width= "100%"
        height="450"
      />
    </div>
  );
};

export default NextDays;