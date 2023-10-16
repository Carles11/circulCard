'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ToolTip from 'components/toolTip'
import Image from 'next/image'
import Sun from 'assets/images/icons/SVG/dark-mode/sun.svg'
import Moon from 'assets/images/icons/SVG/dark-mode/moon.svg'

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
            <span
              className={`mr-2 text-2xl ${
                isDark ? 'text-yellow-300' : 'text-green-200'
              }`}
            >
              <Image src={Sun} alt="sun icon" width={35} height={35} />
            </span>
          ) : (
            <span className="mr-2 text-2xl text-yellow-300">
              <Image src={Moon} alt="sun icon" width={20} height={20} />
            </span>
          )}
        </ToolTip>
      </button>
    </div>
  )
}
