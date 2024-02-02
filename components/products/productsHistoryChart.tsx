// @ts-nocheck

import BarChart from 'components/charts/barChart'
import { calculateTotalYearWeight } from 'utils/utils.service'

const ProductsHistoryChartComponent = ({ yearsCollection }) => {
  const plugins = {
    afterLayout: (chart) => {
      let ctx = chart.chart.ctx
      ctx.save()
      let yAxis = chart.scales['y-axis-0']
      let yBottom = yAxis.getPixelForValue(0)
      let dataset = chart.data.datasets[2]
      dataset.backgroundColor = dataset.data.map((v) => {
        let yTop = yAxis.getPixelForValue(v)
        let gradient = ctx.createLinearGradient(0, yBottom, 0, yTop)
        gradient.addColorStop(0.4, '#FFFFFF')
        gradient.addColorStop(1, '#acd7fa')
        return gradient
      })
      ctx.restore()
    },
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 16,
    },
    scales: {
      x: {
        ticks: {
          display: true,
          color: 'white',
          fontSize: 12,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: true,
          beginAtZero: true,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  }

  const gradientColor = (context) => {
    const chart = context.chart
    const { ctx, chartArea } = chart

    if (!chartArea) {
      // This can happen when the chart collapses to 0 size
      return null
    }

    const yAxis = chart.scales['y']
    const yBottom = yAxis.getPixelForValue(0)

    const gradient = ctx.createLinearGradient(
      0,
      chartArea.bottom,
      0,
      chartArea.top
    )
    gradient.addColorStop(0, '#f553ff') // Start with #f553ff at the bottom
    gradient.addColorStop(0.5, '#ccc') // Transition to white
    gradient.addColorStop(1, '#78d97b') // End with #78d97b at the top

    return gradient
  }

  const labels = ['2021', '2022', '2023', '2024']
  const showBarsNew = calculateTotalYearWeight(yearsCollection)

  const BarChartData = {
    labels,
    datasets: [
      {
        label: 'Toneladas',
        data: showBarsNew,
        backgroundColor: gradientColor,
        borderWidth: 1, // Add a border width for bars
        borderColor: 'black', // Border color for bars
      },
    ],
  }

  return (
    <div className="min-h-auto flex flex-col items-center justify-center gap-3">
      <div className="transition ease-in-out delay-150 w-full rounded rounded-md hover:bg-gray-700 hover:scale-110">
        <BarChart data={BarChartData} options={options} plugins={plugins} />
      </div>{' '}
      <h3 className="text-right">Histórico residuos reciclados</h3>
      {/* <DarkButtonWithHover
        href={undefined}
        btnText="Histórico residuos reciclados"
      /> */}
    </div>
  )
}

export default ProductsHistoryChartComponent
