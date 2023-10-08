'use client'

import { useRouter, usePathname } from 'next/navigation'

export const urlIsHome = () => {
  const pathname = usePathname()
  const areWeHome = pathname === '/'

  return areWeHome
}
