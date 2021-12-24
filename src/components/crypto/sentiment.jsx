import Chart from "react-apexcharts"
import TitleCard from "../common/titleCard";

const Sentiment = ({ dataCoin }) => {
  // console.log("dataCoin", dataCoin)

  const options = {
    chart: {
      type: "bar",
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "50%",
        dataLabels: {
          enabled: false,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          fontSize: "14px",
        },
      },
    },
    yaxis: {
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    colors: ["#08C989", "#E57388"],
  }

  const series = [
    {
      name: "Positive",
      data: [dataCoin.sentiment_votes_up_percentage],
    },
    {
      name: "Negative",
      data: [dataCoin.sentiment_votes_down_percentage],
    },
  ]

  return (
    <div className="crypto__sentiment">
      <TitleCard title={"h4"}>Sentiment votes percentage</TitleCard>

      <div className="crypto__sentiment-info">
        <div className="crypto__sentiment-data">
          {dataCoin.sentiment_votes_up_percentage}%
        </div>
        <div className="crypto__sentiment-data">
          {dataCoin.sentiment_votes_down_percentage}%
        </div>
      </div>

      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="75"
        className="apex-bar"
      />
    </div>
  )
};

export default Sentiment
