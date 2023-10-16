import React from 'react'

const CtasButtons = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center mb-16">
      <button className="m-8 w-auto hover:bg-btn-background-hover hover:text-foreground rounded-xl border border-black text-xl px-4 py-2 mb-2 overflow-hidden whitespace-nowrap">
        TOTAL RESIDUOS 2023
      </button>
      <button className="m-8 w-auto hover:bg-btn-background-hover hover:text-foreground rounded-xl border border-black text-xl px-4 py-2 mb-2 overflow-hidden whitespace-nowrap">
        TOTAL RESIDUOS 2024
      </button>
    </div>
  )
}

export default CtasButtons
