import { useContext } from 'react'
import ToolTip from 'components/toolTip'
import Image from 'next/image'
import { AdminUserContext } from 'context/context'

import AdminON from 'assets/images/icons/icon-admin-on.png'
import AdminOFFblack from 'assets/images/icons/icon-admin-off.png'
import AdminOFFwhite from 'assets/images/icons/icon-admin-off_white.png'

export const AdminSwitcher = () => {
  const { showAdminSection, setShowAdminSection } = useContext(AdminUserContext)

  const toggleAdminIcon = () => {
    setShowAdminSection((prevState) => !prevState) // Use functional update to ensure correct state updates
  }

  return (
    <div className="relative ml-2">
      <button
        onClick={toggleAdminIcon}
        className="flex items-center focus:outline-none"
      >
        <ToolTip
          text="Activa/desactiva el modo administrador"
          placement="bottom-start"
        >
          {showAdminSection ? (
            <span className={`mr-2 text-2xl flip-2-ver-right-1`}>
              <Image
                src={AdminOFFblack}
                alt="admin icon"
                width={35}
                height={35}
                className="block dark:hidden"
              />
              <Image
                src={AdminOFFwhite}
                alt="admin icon"
                width={35}
                height={35}
                className="hidden dark:block"
              />
            </span>
          ) : (
            <span className="mr-2 text-2xl flip-2-ver-right-2">
              <Image src={AdminON} alt="admin icon" width={35} height={20} />
            </span>
          )}
        </ToolTip>
      </button>
    </div>
  )
}
