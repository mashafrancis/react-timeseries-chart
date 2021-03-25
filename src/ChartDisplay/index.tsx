import { Line } from 'react-chartjs-2';
import { ChartDisplayProps } from './interfaces';
import { Chart } from 'chart.js';

Chart.defaults.global.defaultFontFamily =
	'Google Sans,Roboto,Helvetica Neue,sans-serif';

const ChartDisplay = ({
	chartData,
	backgroundColor,
	chartColor,
	labels,
}: ChartDisplayProps): JSX.Element => {
	const data = {
		labels,
		datasets: [
			{
				label: 'Data',
				fill: true,
				lineTension: 0.5,
				backgroundColor,
				borderColor: chartColor,
				borderCapStyle: 'round',
				borderJoinStyle: 'round',
				borderWidth: '0.8',
				maintainAspectRatio: false,
				pointBorderColor: chartColor,
				pointBackgroundColor: '#fff',
				pointBorderWidth: 0.6,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: chartColor,
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: chartData,
			},
		],
		options: {
			legend: {
				display: false,
			},
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				},
			},
			// scales: {
			//   xAxes: [{
			//     gridLines: {
			//       drawOnChartArea:false
			//     }
			//   }],
			//   yAxes: [{
			//     gridLines: {
			//       drawOnChartArea:false
			//     }
			//   }]
			// }
		},
	};

	// @ts-ignore
	return <Line data={data} options={data.options} />;
};

export default ChartDisplay;
