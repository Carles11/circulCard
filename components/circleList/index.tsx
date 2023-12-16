import { iconMap } from 'utils/utils.service'
import Image from 'next/image'

import './circleList.css'

const CircleList = ({ items }: { items: String[] }) => {
  return (
    <div>
      <ul className="ul-circles ul-circles-vertical">
        {items.map((element: { color: string; material_name: string }) => {
          return (
            <li style={{ color: element.color }}>
              <i className="fa-brands fa-codepen"></i>
              {/* <Image
                src={iconMap[element.material_icon]}
                alt="The circular projects"
                height={75}
              /> */}
              <p className="text-sm">{element.material_name}</p>
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
