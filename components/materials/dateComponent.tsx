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
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  }

  const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const showBars = labels.map((check) => (check === material ? 100 : 0))

  const BarChartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: showBars,
        backgroundColor: '#79d97c',
      },
    ],
  }

  return (
    <div className="">
      <BarChart data={BarChartData} options={options} />
    </div>
  )
}

export default DateComponent
