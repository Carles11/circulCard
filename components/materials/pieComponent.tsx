// @ts-nocheck

import PieChart from 'components/charts/pieChart'

const PieComponent = ({ materials }) => {
  const matLabels = materials.map((matItem) => matItem.material_name)
  const matPercentages = materials.map((matItem) => matItem.percentage)

  const PieChartData = {
    labels: matLabels,
    datasets: [
      {
        label: '%',
        data: matPercentages,
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],

        borderColor: '#ffffff',
        borderWidth: 1.3,
        borderAlign: 'inner',
        rotation: 270,
        animation: { animateRotate: true, animateScale: true },
        hoverOffset: 66,
        circumference: 180,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        // set padding to avoid hiding the edge of pie when hovering
        left(ctx) {
          const chart = ctx.chart
          let pl = 0
          chart.data.datasets.forEach(function (el) {
            const hOffset = el.hoverOffset || 0
            pl = Math.max(hOffset / 2 + 5, pl)
          })
          return pl
        },
        right(ctx) {
          const chart = ctx.chart
          let pr = 0
          chart.data.datasets.forEach(function (el) {
            const hOffset = el.hoverOffset || 0
            pr = Math.max(hOffset / 2 + 5, pr)
          })
          return pr
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#787878',
        },
      },
      //   tooltip: {
      //     // Tooltip will only receive click events
      //     events: ['click'],
      //   },
    },
    redraw: true,
    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
  }
  return (
    <PieChart
      data={PieChartData}
      options={options}
      innerText={`${matPercentages}`}
    />
  )
}

export default PieComponent
