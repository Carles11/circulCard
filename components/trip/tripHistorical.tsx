import Image from 'next/image'
import JourneyLine from 'assets/images/icons/SVG/journey/journey-line.svg'
import JourneyDot from 'assets/images/icons/SVG/journey/journey-dot.svg'
const TripHistorical = () => {
  return (
    <div className="mb-20 w-full flex border rounded-xl  bg-[#79d97c] shadow shadow-xs shadow-gray-300  h-64">
      <div className="relative h-full w-1/2 ">textos</div>
      <div className="relative h-full w-1/2">
        <div className="absolute  right-0 top-0">
          <Image
            src={JourneyLine}
            alt="theCirculArt Journey"
            // fill={true}
            objectFit="cover"
            objectPosition="right"
            style={{ width: '100%', height: '120%' }}
          />
        </div>
        <div className="absolute right-20 top-20">
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
