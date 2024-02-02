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
export const calculateTotalUnits = (tripObject: any) => {
  let totalUnits = 0
  tripObject.forEach((trip: { historical_data: any[] }) => {
    trip.historical_data?.forEach(
      (data: { unidades_gestionadas_total: number }) => {
        totalUnits += data.unidades_gestionadas_total
      }
    )
  })
  return totalUnits
}

export const convertMillionsToShortVersion = (number: number) => {
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1)
  } else {
    return number.toString()
  }
}

export const handleUnitsDisplayValue = (units: number) => {
  console.log({ units })
  const extractTheTotal = calculateTotalUnits(units)
  console.log({ extractTheTotal })
  const conv = convertMillionsToShortVersion(extractTheTotal)
  console.log({ conv })
  const isConverted = extractTheTotal >= 1000000

  return {
    numberOfUnits: conv || extractTheTotal,
    unitsUnit: isConverted ? 'Mill.' : '',
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

export const handleWeightConversion = (units: any) => {
  const sumPesoTotal = units[0].historical_data.reduce(
    (total: any, dataPoint: { peso_total: any }) =>
      total + dataPoint.peso_total,
    0
  )

  console.log(sumPesoTotal)

  const conv = convertToTons(sumPesoTotal)
  const valueIsInTones = conv.isInTons
  return {
    convertedWeight: valueIsInTones ? conv.weight : sumPesoTotal,
    weightUnit: valueIsInTones ? 'T.' : 'Kg.',
  }
}

export const calculateTotalYearWeight = (
  data: { historical_data: { date_saved: string; peso_total: number }[] }[]
): { [year: number]: number } => {
  const yearTotals: { [year: number]: number } = {}

  data.forEach((item) => {
    item.historical_data.forEach((dataPoint) => {
      const year = new Date(dataPoint.date_saved).getFullYear()
      if (!yearTotals[year]) {
        yearTotals[year] = 0
      }
      yearTotals[year] += dataPoint.peso_total
    })
  })

  return yearTotals
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
