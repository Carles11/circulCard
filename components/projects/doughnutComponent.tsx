// @ts-nocheck

import DoughnutChart from '@/components/charts/doughnutChart'

const DoughnutComponent = ({ proj }) => {
  const DonughtChartData = {
    labels: ['Recycled percentage', 'to Go'],
    datasets: [
      {
        label: '%',
        data: [proj.project_plastic, `${100 - proj.project_plastic}`],
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
      innerText={`${proj.project_plastic}`}
    />
  )
}

export default DoughnutComponent
