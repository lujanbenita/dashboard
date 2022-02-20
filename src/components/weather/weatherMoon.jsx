import TitleCard from '../common/titleCard'
import Chart from 'react-apexcharts'

const WeatherMoon = ({ weatherData }) => {
  const options = {
    chart: {
      type: 'radialBar'
    },
    // colors: ["#20E647"],
    colors: ['#08C989'],
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: '60%',
          background: '#293450'
        },
        track: {
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            blur: 4,
            opacity: 0.15
          }
        },
        dataLabels: {
          name: {
            offsetY: -10,
            color: '#E1435B',
            fontSize: '14px'
          },
          value: {
            color: '#E09E1E',
            fontSize: '30px',
            show: true
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        gradientToColors: ['#0882DF'],
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Illumination']
  }

  const series = [weatherData.forecast.forecastday[0].astro.moon_illumination]

  return (
    <div className='card-weather card size-row-4'>
      <TitleCard>Moon</TitleCard>
      <Chart
        options={options}
        series={series}
        type='radialBar'
        height='100%'
      />
    </div>
  )
}

export default WeatherMoon
