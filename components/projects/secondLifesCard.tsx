// @ts-nocheck

import type { Database } from 'types/supabase'
import Link from 'next/link'
import DoughnutComponent from './secLifeDoughnutComponent'
import { iconMap } from 'utils/utils.service'
import Image from 'next/image'

const SecondLifeCard = ({ secondLifes }: { secondLifes: Database }) => {
  return (
    <div className="flex flex-row flex-wrap place-content-center lg:m-16 gap-6 md:gap-8 lg:gap-8">
      {secondLifes.map((secLife) => {
        return (
          <div
            key={secLife.id}
            className="w-[85%] md:w-fit flex flex-col gap-4 md:gap-6 text-black items-center"
          >
            {/* <div className="rounded-full border-2 dark:border-8 border-gray-400 shadow-xl   bg-foreground h-36 w-36">
              <DoughnutComponent secLife={secLife} />
            </div> */}
            <div className="w-full bg-white rounded-t-3xl md:rounded-3xl border-2 dark:border-8 shadow-xl   border-gray-300">
              <div className="min-w-full md:min-w-[320px] w-auto">
                <div className="p-2 py-5 flex flex-col items-center justify-between h-96">
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1 items-start justify-center">
                      <div className="w-48 bg-lightgreenBg rounded-full text-xl px-4 py-2 mb-2 text-center">
                        <h4 className="mb-2 text-black">Proyecto</h4>
                        <h4 className="mb-2 text-foreground">
                          {secLife.life_name}
                        </h4>
                      </div>
                      <Image
                        src={iconMap[secLife.life_origin]}
                        alt="The circulart products"
                        width={40}
                        height={40}
                      />
                    </div>
                    <p className="w-48 my-6">{secLife.life_description}</p>
                  </div>
                  <Link
                    key={secLife.id}
                    href={{}}
                    className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
                  >
                    <span className="text-foreground text-2xl font-bold pb-1">
                      +
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SecondLifeCard
