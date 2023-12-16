// @ts-nocheck

import PieChart from 'components/charts/pieChart'

const PieComponent = ({ materials, projects }) => {
  const baseArray = materials || projects || null
  const prefix = materials ? 'material' : 'project'

  const matLabels = baseArray?.map((matItem) => matItem[`${prefix}_name`])
  const matPercentages = baseArray?.map((matItem) => matItem.percentage)
  const matColors = baseArray?.map((matItem) => matItem.color)

  const PieChartData = {
    labels: matLabels,
    datasets: [
      {
        label: '%',
        data: matPercentages,
        backgroundColor: matColors,

        borderColor: '#ffffff',
        borderWidth: 1.3,
        borderAlign: 'inner',
        rotation: 270,
        animation: { animateRotate: true, animateScale: true },
        hoverOffset: 66,
        circumference: 360,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        // set paddins to avoid cutted edges of the pie when scaling in hovering
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
        display: false,
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
    onClick: (evt, ctx) => {
      document.getElementById('materials-pie').getContext('2d')
      var myLine = new Chart(ctx, config)
      console.log({ ctx })
      document.getElementById('canvas').onclick = function (evt) {
        var activePoint = myLine.getElementAtEvent(event)

        // make sure click was on an actual point
        if (activePoint.length > 0) {
          var clickedDatasetIndex = activePoint[0]._datasetIndex
          var clickedElementindex = activePoint[0]._index
          var label = myLine.data.labels[clickedElementindex]
          var value =
            myLine.data.datasets[clickedDatasetIndex].data[clickedElementindex]
          console.log('Clicked: ' + label + ' - ' + value)
        }
      }
    },
  }

  return (
    <PieChart
      id="materials-pie"
      data={PieChartData}
      options={options}
      innerText={`${matPercentages}`}
    />
  )
}

export default PieComponent
