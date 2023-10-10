// @ts-nocheck

import BarChart from 'components/charts/barChart'

const DateComponent = ({ material }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 20,
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
          display: false,
          beginAtZero: true,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  }

  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  // Show green for 100 and white for the rest
  const showBars = labels.map((check) =>
    check === material ? 100 : Math.floor(Math.random() * 41) + 10
  )

  const BarChartData = {
    labels,
    datasets: [
      {
        data: showBars,
        backgroundColor: showBars.map((item) =>
          item === 100 ? '#79d97c' : '#ffffff'
        ),
        color: '#ffffff',
      },
    ],
  }

  return (
    <div className="min-h-auto">
      <BarChart data={BarChartData} options={options} />
    </div>
  )
}

export default DateComponent
