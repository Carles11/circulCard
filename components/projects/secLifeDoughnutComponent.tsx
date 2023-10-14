// @ts-nocheck

import DoughnutChart from '@/components/charts/doughnutChart'

const DoughnutComponent = ({ secLife }) => {
  const secLifeData = secLife.life_percentage

  const DonughtChartData = {
    labels: ['Recycled percentage', 'to Go'],
    datasets: [
      {
        label: '%',
        data: [secLifeData, `${100 - secLifeData}`],
        backgroundColor: ['#79d97c', 'transparent'],
        borderColor: 'transparent',
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
      innerText={`${secLifeData}`}
    />
  )
}

export default DoughnutComponent
