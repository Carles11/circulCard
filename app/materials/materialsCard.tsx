import type { Database } from 'types/supabase'
// import Chart from 'chart.js/auto'
import DoughnutChart from '@/components/charts/doughnutChart'

const MaterialsCard = ({ materials }: { materials: Database }) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between m-16 gap-2 md:gap-4 lg:gap-8">
      {materials.map((mat) => {
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
              cutout: '80%',
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
            padding: 20,
          },
        }

        return (
          <div className="flex flex-col gap-2 md:gap-4 text-black items-center">
            <div className=" rounded-full border-8 border-gray-400 bg-white h-36 w-36">
              <DoughnutChart
                data={DonughtChartData}
                options={options}
                innerText={`${mat.percentage}`}
              />
            </div>
            <div className="bg-white rounded-3xl border-8 border-gray-300">
              <div className="min-w-[90px] lg:min-w-[260px]">
                <a
                  key={mat.id}
                  className="relative flex flex-col group rounded-lg border p-6 hover:border-foreground place-self-center"
                  href={'https://crix.design'}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3 className="font-bold text-center align-center mb-2 min-h-[20px] text-white bg-green-700 rounded-full text-xl hover:bg-btn-background-hover">
                    {mat.material_name}
                  </h3>

                  <div className="flex flex-col grow gap-4 justify-between">
                    <p className="text-sm opacity-70">{mat.material_name}</p>
                    <div className="flex justify-between items-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-80 group-hover:opacity-100"
                      >
                        <path
                          d={
                            'M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21M4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44772 20.5523 4 20 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20Z'
                          }
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MaterialsCard
