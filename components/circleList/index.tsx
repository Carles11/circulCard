import { iconMap } from 'utils/utils.service'
import Image from 'next/image'
import { isMobile } from 'react-device-detect'

import './circleList.css'

const CircleList = ({
  items,
  materials,
}: {
  items: String[]
  materials: boolean
}) => {
  const prefix = materials ? 'material' : 'project'

  return (
    <div>
      <ul className={`ul-circles ${!isMobile && `ul-circles-vertical`}`}>
        {items.map((element: any) => {
          return (
            <li
              //@ts-ignore
              style={{ color: element.color, '--accent-color': element.color }}
            >
              {materials ? (
                <i className="fa-brands fa-codepen"></i>
              ) : (
                <div className="flex items-center justify-center">
                  <Image
                    src={iconMap[element.project_icon]}
                    alt="The circular projects"
                    height={30}
                  />
                </div>
              )}
              <div className="flex flex-col gap-0 ">
                <p className="text-sm ">{element[`${prefix}_name`]}</p>
                {materials && (
                  <p className="text-sm">{element.cumulative_total} T.</p>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      {/* <ul className="ul-circles ul-circles-vertical">
        <li style="--accent-color:#D3302C">
          <i className="fa-brands fa-codepen"></i>Lorem Impsum
        </li>
        <li style="--accent-color:#F3A22D">
          <i className="fa-brands fa-html5"></i>Lorem Impsum
        </li>
        <li style="--accent-color:#495460">
          <i className="fa-brands fa-css3"></i>Lorem Impsum
        </li>
      </ul> */}
    </div>
  )
}

export default CircleList
