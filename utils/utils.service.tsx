'use client'

import { usePathname } from 'next/navigation'
import { StaticImageData } from 'next/image'

// Icons import
import POSicon from 'assets/images/icons/SVG/products/pos-icon.svg'
import CARDSicon from 'assets/images/icons/SVG/products/cards-icon.svg'
import FURNITUREicon from 'assets/images/icons/SVG/products/furniture-icon.svg'
import HERZicon from 'assets/images/icons/herz.png'
import FITNESSicon from 'assets/images/icons/fitness.png'
import PROJECTSicon from 'assets/images/icons/projects.png'
import DEFAULTicon from 'assets/images/icons/SVG/products/default-product-icon.svg'

export const urlIsHome = () => {
  const pathname = usePathname()
  const areWeHome = pathname === '/'

  return areWeHome
}

export const capitalizeFirstLetter = (string: string) => {
  return string?.charAt(0).toUpperCase() + string?.slice(1)
}

export const convertToTons = (weight: any) => {
  return weight > 800
    ? { weight: weight / 1000, isInTons: true }
    : { weight, isInTons: true }
}

export const iconMap: Record<string, StaticImageData> = {
  pos: POSicon,
  cards: CARDSicon,
  furniture: FURNITUREicon,
  default: DEFAULTicon,
  herz: HERZicon,
  fitness: FITNESSicon,
  projects: PROJECTSicon,
}
