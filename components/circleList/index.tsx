import { isMobile } from 'react-device-detect'

import './circleList.css'
import Link from 'next/link'

const CircleList = ({
  items,
  isMaterial,
}: // percentage,
{
  items: String[]
  isMaterial: boolean
  // percentage: number
}) => {
  const prefix = isMaterial ? 'material' : 'project'

  return (
    <div>
      <ul className={`ul-circles ${!isMobile && `ul-circles-vertical`}`}>
        {items.map((element: any, index) => {
          return (
            <li
              key={index}
              //@ts-ignore
              style={{ color: element.color, '--accent-color': element.color }}
              className={`${
                element[`${prefix}_name`] === 'proyectos personalizados'
                  ? 'hover:scale-125'
                  : ''
              }`}
            >
              <i className="fa-brands fa-codepen"></i>
              {/* {isMaterial ? (
                <i className="fa-brands fa-codepen"></i>
              ) : (
                <div className="flex items-center justify-center">
                  <Image
                    src={iconMap[element.project_icon]}
                    alt="The circular projects"
                    height={30}
                  />
                </div>
              )} */}
              <div className="flex flex-col gap-0 ">
                {element[`${prefix}_name`] == 'proyectos personalizados' ? (
                  <div className="relative">
                    <span className="absolute top-0 right-0 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    <Link href={'/projects/second-life'}>
                      <p className="text-xs object-contain">
                        {element[`${prefix}_name`]}
                      </p>
                    </Link>
                  </div>
                ) : (
                  <p className="text-xs">{element[`${prefix}_name`]}</p>
                )}
                {isMaterial && (
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
