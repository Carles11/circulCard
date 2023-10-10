// @ts-nocheck

import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ data, options, innerText }) => {
  const plugins = [
    {
      beforeDraw: function (chart: { width: any; height: any; ctx: any }) {
        var height = chart.height,
          ctx = chart.ctx
        ctx.restore()
        var fontSize = (height / 100).toFixed(2)
        ctx.font = fontSize + 'em sans-serif'
        ctx.textBaseline = 'middle'
        ctx.textAlign = 'center'
        var text = `${innerText} %`
        const xCoor = chart.getDatasetMeta(0).data[0].x
        const yCoor = chart.getDatasetMeta(0).data[0].y
        // textX = Math.round((width - ctx.measureText(text).width) / 2),
        // textY = height / 2

        ctx.fillStyle = '#79d97c'
        ctx.fillText(text, xCoor, yCoor)
        ctx.save()
      },
    },
  ]

  return <Doughnut data={data} options={options} plugins={plugins} />
}

export default DoughnutChart
