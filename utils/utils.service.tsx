'use client'

import { useRouter, usePathname } from 'next/navigation'
import { StaticImageData } from 'next/image'

// Icons import
import POSicon from 'assets/images/icons/pos-icon.png'
import CARDSicon from 'assets/images/icons/cards-icon.png'
import FURNITUREicon from 'assets/images/icons/furniture-icon.png'
import HERZicon from 'assets/images/icons/herz.png'
import FITNESSicon from 'assets/images/icons/fitness.png'
import PROJECTSicon from 'assets/images/icons/projects.png'

export const urlIsHome = () => {
  const pathname = usePathname()
  const areWeHome = pathname === '/'

  return areWeHome
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const iconMap: Record<string, StaticImageData> = {
  pos: POSicon,
  cards: CARDSicon,
  furniture: FURNITUREicon,
  herz: HERZicon,
  fitness: FITNESSicon,
  projects: PROJECTSicon,
}
