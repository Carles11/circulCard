import React from 'react'

const CtasButtons = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mb-16">
      <button className="m-8 w-auto text-black bg-white hover:bg-btn-background-hover hover:text-white rounded-full text-xl px-4 py-2 mb-2 overflow-hidden whitespace-nowrap">
        <strong>TOTAL RESIDUOS 2023</strong>
      </button>
      <button className="m-8 w-auto text-black bg-white hover:bg-btn-background-hover hover:text-white rounded-full text-xl px-4 py-2 mb-2 overflow-hidden whitespace-nowrap">
        <strong>TOTAL RESIDUOS 2024</strong>
      </button>
    </div>
  )
}

export default CtasButtons
