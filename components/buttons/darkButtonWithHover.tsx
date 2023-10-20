import React from 'react'

const DarkButtonWithHover = ({
  href,
  btnText,
}: {
  href: string | undefined
  btnText: string
}) => {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden tracking-tighter text-white bg-gray-600 rounded-lg group hover:cursor-pointer"
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-lightgreenBg rounded-full group-hover:w-60 group-hover:h-56"></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
      <span className="relative">{btnText}</span>
    </a>
  )
}

export default DarkButtonWithHover
