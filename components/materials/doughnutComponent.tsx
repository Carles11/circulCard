// @ts-nocheck

import DoughnutChart from '@/components/charts/doughnutChart'

const DoughnutComponent = ({ mat }) => {
  const DonughtChartData = {
    labels: ['Recycled percentage', 'to Go'],
    datasets: [
      {
        label: '%',
        data: [mat.percentage, `${100 - mat.percentage}`],
        backgroundColor: ['#79d97c', 'transparent'],
        // borderColor: '#787878',
        borderWidth: 1,
        borderAlign: 'inner',
        cutout: '90%',
        animation: { animateRotate: true, animateScale: true },
        hoverOffset: 2,
        // clip: { left: 5, top: false, right: -2, bottom: 0 },
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    layout: {
      padding: 10,
    },
  }
  return (
    <DoughnutChart
      data={DonughtChartData}
      options={options}
      innerText={`${mat.percentage}`}
    />
  )
}

export default DoughnutComponent
