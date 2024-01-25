'use client'

import { useRouter } from 'next/navigation'
import { urlIsHome } from 'utils/utils.service'

import { ThemeSwitcher } from 'components/theme-switcher/themeSwitcher'
import { AdminSwitcher } from 'components/adminPages/adminSwitcher'

import LogoutButton from 'components/buttons/LogoutButton'
import HeaderBulbIcon from './headerBulbIcon'

function mainHeader({ email }: { email: string | undefined }) {
  const router = useRouter()

  return (
    <div className="flex justify-between">
      <div className="flex items-end">
        {!urlIsHome() ? (
          <div className="flex align-center flex items-center">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-2 rounded-md no-underline bg-transparent transition-scale hover:scale-1.5 flex items-center group text-sm"
            >
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
                className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>{' '}
              Volver
            </button>
          </div>
        ) : (
          <div className="flex justify-start ml-1 md:ml-8">
            <p>Hola, {email}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col items-end gap-4">
        <div className="flex items-end gap-4">
          <HeaderBulbIcon />
          <ThemeSwitcher />
        </div>
        <div className="flex items-end">
          <LogoutButton /> |{''}
          <AdminSwitcher />
        </div>
      </div>
    </div>
  )
}

export default mainHeader
