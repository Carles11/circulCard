// @ts-nocheck

import type { Database } from 'types/supabase'
import Link from 'next/link'
import DoughnutComponent from './doughnutComponent'
import DateComponent from './dateComponent'
import MaterialsIcons from './materialsIcons'

const MaterialsCard = ({
  materials,
  projects,
  clientID,
  productName,
}: {
  materials: Database
  projects: Database
  clientID: string
  productName: string
}) => {
  console.log({ clientID })
  return (
    <div className="flex flex-row flex-wrap place-content-center lg:m-16 gap-6 md:gap-8 lg:gap-8">
      {materials.map((mat) => {
        console.log('materialID', mat.id)
        return (
          <div
            key={mat.id}
            className="flex flex-col gap-4 md:gap-6 text-black items-center"
          >
            <div className="rounded-full border-8 border-gray-400 bg-white h-36 w-36">
              <DoughnutComponent mat={mat} />
            </div>
            <div className="w-screen md:w-full bg-white rounded-t-3xl md:rounded-3xl border-8 border-gray-300">
              <div className="min-w-full md:min-w-[320px] w-auto">
                <div className="p-2 py-5 flex flex-col items-center">
                  <div>
                    <button className="w-28 md:w-32 lg:w-48 bg-green-700 rounded-full text-xl px-4 py-2 text-white mb-2 hover:bg-btn-background-hover">
                      {' '}
                      {mat.material_name}
                    </button>
                  </div>
                  <Link
                    href={{
                      pathname: 'trip',
                      query: {
                        materialID: mat.id,
                        clientID: clientID,
                        productName: productName,
                      },
                    }}
                    className="rounded-3xl bg-gray-300"
                  >
                    <DateComponent material={mat.collect_date} />
                  </Link>
                  <div className="flex flex-col grow gap-4 justify-between items-center">
                    <MaterialsIcons projects={projects} />
                    <div
                      id="roundButton"
                      className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
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
