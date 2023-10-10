import BarChart from 'components/charts/barChart'
const DateComponent = (material) => {
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
  const showBars = labels.map((check) =>
    check === material.material ? 100 : 0
  )
  console.log('showBarsshowBarsshowBars', showBars)
  console.log({ material })
  const BarChartData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: showBars,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      //   {
      //     label: 'Dataset 2',
      //     data: labels.map(() => 35),
      //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
      //   },
    ],
  }

  return (
    <div className="">
      <BarChart data={BarChartData} options={options} />
    </div>
  )
}

export default DateComponent
