import ReactApexChart from "react-apexcharts";

const TreemapChartCryptos = ({mainData}) => {

	const options = {
    chart: {
      height: 350,
      type: "treemap",
    },
    colors: [
			'#3B93A5',
			'#F7B844',
			'#ADD8C7',
			'#EC3C65',
			'#CDD7B6',
			'#C1F666',
			'#D43F97',
			'#1E5D8C',
			'#421243',
			'#7F94B0',
			'#EF6537',
			'#C0ADDB'
		],
		plotOptions: {
			treemap: {
				enableShades: true,
				shadeIntensity: 0.5,
				reverseNegativeShade: true,
				colorScale: {
					ranges: [
						{
							from: -6,
							to: 0,
							color: '#CD363A'
						},
						{
							from: 0.001,
							to: 6,
							color: '#52B12C'
						}
					]
				}
			}
		},
		dataLabels: {
			enabled: true,
			style: {
				fontSize: '32px',
			},
			formatter: function(text, op) {
				return [text, op.value]
			},
			offsetY: -4
		},
    legend: {
      show: false
    },
		toolbar: {
			show: false,
		}
  }

	const genSeries = (data) => {
		let dataSeries = data.map(item => {
			return ({x: (item.symbol).toUpperCase(), y: item.price_change_percentage_24h})
		})

		dataSeries = dataSeries.sort(function(a, b){
			return b.y - a.y
		});

		return dataSeries
	}


	const series = [
		{
			name: "Cryptos",
			data: genSeries(mainData)
		}
	];

	return (
		<ReactApexChart
			options={options}
			series={series}
			type="treemap"
			height="600"
		/>
	);
};

export default TreemapChartCryptos;