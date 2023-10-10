import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const DoughnutChart = ({ data, options, innerText }) => {
  const plugins = [
    {
      beforeDraw: function (chart: { width: any; height: any; ctx: any }) {
        var width = chart.width,
          height = chart.height,
          ctx = chart.ctx
        ctx.restore()
        var fontSize = (height / 160).toFixed(2)
        ctx.font = fontSize + 'em sans-serif'
        ctx.textBaseline = 'top'
        var text = `${innerText} %`,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2
        ctx.fillStyle = '#ffffff'
        ctx.fillText(text, textX, textY)
        ctx.save()
      },
    },
  ]

  return <Doughnut data={data} options={options} plugins={plugins} />
}

export default DoughnutChart
