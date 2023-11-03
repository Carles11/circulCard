import React, { useState } from 'react'

import GreenButtonWhiteTextWithHover from 'components/buttons/greenButtonWhiteTextWithHover'

const CarbonCalculator = () => {
  const [energyConsumption, setEnergyConsumption] = useState('Select an option')
  const [transportationHabits, setTransportationHabits] =
    useState('Select an option')
  const [lifestyleChoices, setLifestyleChoices] = useState('Select an option')
  const [carbonFootprint, setCarbonFootprint] = useState<number | null>(null) // Specify number | null

  const energyOptions = ['Bajo', 'Moderado', 'Alto']

  const transportationOptions = [
    'Transporte Público',
    'Compartir Coche',
    'Bicicleta/Caminar',
    'Conducir un Coche Eficiente en Combustible',
    'Conducir un Coche Convencional',
  ]

  const lifestyleOptions = [
    'Residuo Mínimo',
    'Consumo Promedio',
    'Alto Consumo',
  ]

  const handleCalculate = () => {
    let footprint = 0

    // Energy Consumption Calculation
    switch (energyConsumption) {
      case 'Bajo':
        footprint += 2 // Huella de carbono de bajo consumo de energía
        break
      case 'Moderado':
        footprint += 5 // Huella de carbono de consumo de energía moderado
        break
      case 'Alto':
        footprint += 10 // Huella de carbono de alto consumo de energía
        break
      default:
        break
    }

    // Transportation Habits Calculation
    switch (transportationHabits) {
      case 'Transporte Público':
        footprint += 2 // Huella de carbono de transporte público
        break
      case 'Compartir Coche':
        footprint += 4 // Huella de carbono de compartir coche
        break
      case 'Bicicleta/Caminar':
        footprint += 1 // Huella de carbono de bicicleta/caminar
        break
      case 'Conducir un Coche Eficiente en Combustible':
        footprint += 5 // Huella de carbono de conducir un coche eficiente en combustible
        break
      case 'Conducir un Coche Convencional':
        footprint += 10 // Huella de carbono de conducir un coche convencional
        break
      default:
        break
    }

    // Lifestyle Choices Calculation
    switch (lifestyleChoices) {
      case 'Residuo Mínimo':
        footprint += 3 // Huella de carbono de estilo de vida con residuo mínimo
        break
      case 'Consumo Promedio':
        footprint += 6 // Huella de carbono de estilo de vida con consumo promedio
        break
      case 'Alto Consumo':
        footprint += 10 // Huella de carbono de estilo de vida con alto consumo
        break
      default:
        break
    }

    setCarbonFootprint(footprint)
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 md:mb-8 sm:px-4">
      <h2 className="text-2xl font-semibold mb-4">
        Carbon Footprint Calculator
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Dirías que tu consumo general de energía es:
        </label>
        <select
          className="block w-full p-2 border rounded"
          value={energyConsumption}
          onChange={(e) => setEnergyConsumption(e.target.value)}
        >
          {energyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cuáles son tus hábitos de transporte?
        </label>
        <select
          className="block w-full p-2 border rounded"
          value={transportationHabits}
          onChange={(e) => setTransportationHabits(e.target.value)}
        >
          {transportationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cómo definirías tu estilo de vida?
        </label>
        <select
          className="block w-full p-2 border rounded"
          value={lifestyleChoices}
          onChange={(e) => setLifestyleChoices(e.target.value)}
        >
          {lifestyleOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-center">
        <GreenButtonWhiteTextWithHover
          btnText="Calcular"
          onPress={handleCalculate}
        />
      </div>
      {carbonFootprint !== null && (
        <p className="mt-4 text-gray-700 text-center">
          Tu huella de carbono estimada es de:
          <br />
          <span className="text-2xl text-lightgreenBg font-semibold">
            {carbonFootprint} toneladas de CO2
          </span>
          <br />
          por año.
        </p>
      )}
    </div>
  )
}

export default CarbonCalculator
