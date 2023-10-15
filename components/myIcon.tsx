import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core' // Import the IconProp type

interface MyIconProps {
  icon: IconProp
}

const MyIcon: React.FC<MyIconProps> = ({ icon }) => {
  return (
    <div>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

export default MyIcon
