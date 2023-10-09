import type { Database } from 'types/supabase'

const MaterialsCard = ({ materials }: { materials: Database }) => {
  return (
    <div className="flex flex-row items-center justify-between m-16 gap-16">
      {materials.map((mat) => {
        return (
          <div className="flex flex-col gap-8 text-black">
            <div className="text-white"> {mat.percentage}</div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-white">
              <a
                key={mat.id}
                className="relative flex flex-col group rounded-lg border p-6 hover:border-foreground"
                href={'https://crix.design'}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="font-bold mb-2  min-h-[40px] lg:min-h-[60px] text-white bg-green-700 rounded-full text-xl px-8 py-2 text-white mb-2 hover:bg-btn-background-hover">
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
        )
      })}
    </div>
  )
}

export default MaterialsCard
