// @ts-nocheck

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const PieChart = ({ data, options }) => {
  return <Pie data={data} options={options} />
}

export default PieChart
