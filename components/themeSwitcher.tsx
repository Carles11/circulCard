'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ToolTip from 'components/toolTip'

// import Sun from 'assets/images/icons/SVG/dark-mode/sun.svg'
// import Moon from 'assets/images/icons/SVG/dark-mode/moon.svg'

import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import MyIcon from './myIcon'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(theme === 'dark')
  }, [theme])

  if (!mounted) {
    return null
  }

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDarkMode}
        className="flex items-center focus:outline-none"
      >
        <ToolTip
          text="Activa/desactiva el alto contraste"
          placement="bottom-start"
        >
          {isDark ? (
            <span className="mr-2 text-2xl text-yellow-300">
              <MyIcon icon={faSun} />
            </span>
          ) : (
            <span className="mr-2 text-2xl text-yellow-300">
              <MyIcon icon={faMoon} />
            </span>
          )}
        </ToolTip>
      </button>
    </div>
  )
}
