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

export const convertToTons = (weight: number) => {
  const weightInTons = weight / 1000
  const formattedWeight =
    weightInTons % 1 === 0
      ? weightInTons.toFixed(0) // If weight in tons is a whole number, remove decimal point
      : weightInTons.toFixed(1) // Otherwise, show one decimal place

  return weight > 800
    ? { weight: formattedWeight, isInTons: true }
    : { weight, isInTons: false }
}

export const calculateTotalPeso = (tripObject: any) => {
  let totalPeso = 0
  tripObject.forEach((trip: { historical_data: any[] }) => {
    trip.historical_data?.forEach((data: { peso_total: number }) => {
      totalPeso += data.peso_total
    })
  })
  return totalPeso
}

export const convertThousandsToShort = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M.'
  } else {
    return number.toString()
  }
}

export const handleUnitsDisplayValue = (weight: number) => {
  const conv = convertThousandsToShort(weight)
  const valueIsInMillions = typeof conv === 'string' && conv.includes('M')

  return {
    convertedWeight: valueIsInMillions ? conv : weight,
    weightUnit: valueIsInMillions ? 'M' : '',
  }
}

export const getTheNumberOfUnits = (unitsArray: any) => {
  let totalPeso = 0
  unitsArray.forEach((unit: { historical_data: any[] }) => {
    unit.historical_data?.forEach(
      (data: { unidades_gestionadas_total: number }) => {
        totalPeso += data.unidades_gestionadas_total
      }
    )
  })
  return totalPeso
}

// // Example usage:
// const weightInThousands = 15000000
// const conversionResult = handleUnitsDisplayValue(weightInThousands)
// console.log(conversionResult) // Output: { convertedWeight: '15M', weightUnit: 'M' }

export const iconMap: Record<string, StaticImageData> = {
  pos: POSicon,
  cards: CARDSicon,
  furniture: FURNITUREicon,
  default: DEFAULTicon,
  herz: HERZicon,
  fitness: FITNESSicon,
  projects: PROJECTSicon,
}
