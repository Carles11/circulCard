'use client'

import { useRouter } from 'next/navigation'
import { urlIsHome } from 'utils/utils.service'

import { ThemeSwitcher } from 'components/theme-switcher/themeSwitcher'
import HeaderBulbIcon from './headerBulbIcon'

function authHeader() {
  const router = useRouter()

  return (
    <div className="flex justify-between">
      <div className="flex items-end">
        {!urlIsHome() && (
          <div className="flex align-center items-center">
            <button
              type="button"
              onClick={() => router.back()}
              className="py-2 px-4 rounded-md no-underline bg-transparent hover:scale-1.5 flex items-center group text-sm"
            >
              {' '}
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
        )}
      </div>
      <div className="flex items-end gap-4">
        <HeaderBulbIcon />
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default authHeader
