'use client'

import { useRouter, usePathname } from 'next/navigation'

export const urlIsHome = () => {
  const pathname = usePathname()
  const areWeHome = pathname === '/'

  return areWeHome
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
