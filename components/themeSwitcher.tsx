'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ToolTip from 'components/toolTip'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <ToolTip text="Activa/desactiva el alto contraste" placement="bottom-end">
      <div>
        <button
          className={`w-fit absolute right-5 top-11 p-2 rounded-md hover:scale-125 active:scale-100 duration-200 dark:bg-[#212933]`}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <span
            className="text-3xl"
            dangerouslySetInnerHTML={{
              __html: theme === 'light' ? '&#9789;' : '&#9788;',
            }}
          />
        </button>{' '}
      </div>
    </ToolTip>
  )
}
