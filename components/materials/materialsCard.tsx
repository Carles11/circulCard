import type { Database } from 'types/supabase'

import DoughnutComponent from './doughnutComponent'
import DateComponent from './dateComponent'
import MaterialsIcons from './materialsIcons'

const MaterialsCard = ({
  materials,
  projects,
}: {
  materials: Database
  projects: Database
}) => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between m-16 gap-2 md:gap-4 lg:gap-8">
      {materials.map((mat) => {
        return (
          <div
            key={mat.id}
            className="flex flex-col gap-2 md:gap-4 text-black items-center"
          >
            <div className=" rounded-full border-8 border-gray-400 bg-white h-36 w-36">
              <DoughnutComponent mat={mat} />
            </div>
            <div className="bg-white rounded-3xl border-8 border-gray-300">
              <div className="min-w-[90px] lg:min-w-[260px]">
                <div className="p-8 relative flex flex-col group rounded-lg border p-6 hover:border-foreground place-self-center items-center">
                  <div>
                    <h3 className="font-bold text-center align-center mb-2 min-h-[20px] w-32 text-white bg-green-700 rounded-full text-xl hover:bg-btn-background-hover">
                      {mat.material_name}
                    </h3>
                  </div>
                  <div className="rounded-3xl bg-gray-400">
                    <DateComponent material={mat.collect_date} />
                  </div>
                  <div className="flex flex-col grow gap-4 justify-between items-center">
                    <MaterialsIcons projects={projects} />
                    <div
                      id="roundButton"
                      className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full cursor-pointer"
                    >
                      <span className="text-white text-2xl font-bold pb-1">
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MaterialsCard
