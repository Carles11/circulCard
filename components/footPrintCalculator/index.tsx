import React, { useState } from 'react'

const CarbonCalculator = () => {
  const [energyConsumption, setEnergyConsumption] = useState('Select an option')
  const [transportationHabits, setTransportationHabits] =
    useState('Select an option')
  const [lifestyleChoices, setLifestyleChoices] = useState('Select an option')
  const [carbonFootprint, setCarbonFootprint] = useState<number | null>(null) // Specify number | null

  const energyOptions = ['Low', 'Moderate', 'High']

  const transportationOptions = [
    'Public Transportation',
    'Carpooling',
    'Biking/Walking',
    'Driving a Fuel-efficient Car',
    'Driving a Conventional Car',
  ]

  const lifestyleOptions = [
    'Minimal Waste',
    'Average Consumption',
    'High Consumption',
  ]

  const handleCalculate = () => {
    let footprint = 0

    // Energy Consumption Calculation
    switch (energyConsumption) {
      case 'Low':
        footprint += 2 // Low energy consumption footprint
        break
      case 'Moderate':
        footprint += 5 // Moderate energy consumption footprint
        break
      case 'High':
        footprint += 10 // High energy consumption footprint
        break
      default:
        break
    }

    // Transportation Habits Calculation
    switch (transportationHabits) {
      case 'Public Transportation':
        footprint += 2 // Public transportation footprint
        break
      case 'Carpooling':
        footprint += 4 // Carpooling footprint
        break
      case 'Biking/Walking':
        footprint += 1 // Biking/Walking footprint
        break
      case 'Driving a Fuel-efficient Car':
        footprint += 5 // Fuel-efficient car footprint
        break
      case 'Driving a Conventional Car':
        footprint += 10 // Conventional car footprint
        break
      default:
        break
    }

    // Lifestyle Choices Calculation
    switch (lifestyleChoices) {
      case 'Minimal Waste':
        footprint += 3 // Minimal waste lifestyle footprint
        break
      case 'Average Consumption':
        footprint += 6 // Average consumption lifestyle footprint
        break
      case 'High Consumption':
        footprint += 10 // High consumption lifestyle footprint
        break
      default:
        break
    }

    setCarbonFootprint(footprint)
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-semibold mb-4">
        Carbon Footprint Calculator
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Energy Consumption:
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
          Transportation Habits:
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
          Lifestyle Choices:
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleCalculate}
      >
        Calculate
      </button>
      {carbonFootprint !== null && (
        <p className="mt-4">
          Your estimated carbon footprint is: {carbonFootprint} tons CO2 per
          year.
        </p>
      )}
    </div>
  )
}

export default CarbonCalculator
