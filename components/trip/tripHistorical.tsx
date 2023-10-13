import Image from 'next/image'
import JourneyLine from 'assets/images/icons/SVG/journey/journey-line.svg'
import JourneyDot from 'assets/images/icons/SVG/journey/journey-dot.svg'
const TripHistorical = () => {
  return (
    <div className="z-0 w-full flex border rounded-xl  bg-[#79d97c] shadow shadow-xs shadow-gray-300  h-64">
      <div className="relative h-full w-1/2 "></div>
      <div className="relative h-full w-1/2 ">
        <div className="absolute inset-0 md:inset-0 z-99999">
          <Image
            src={JourneyLine}
            alt="theCirculArt Journey"
            layout="fill"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
        <div className="absolute right-5 md:right-20 top-16 md:top-20 z-1">
          <Image
            src={JourneyDot}
            height={65}
            width={65}
            alt="theCirculArt Journey"
            objectFit="contain"
            objectPosition="right"
          />
        </div>
      </div>
    </div>
  )
}

export default TripHistorical
