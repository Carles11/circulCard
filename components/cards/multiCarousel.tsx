// @ts-nocheck
import Carousel from 'react-multi-carousel'
import { isMobile } from 'react-device-detect'

import type { Database } from 'types/supabase'
import Link from 'next/link'
import DoughnutComponent from 'components/materials/doughnutComponent'
import MaterialsIcons from 'components/materials/materialsIcons'

import 'react-multi-carousel/lib/styles.css'

const MultiCarousel = ({
  materials,
  projects,
}: {
  materials: Database
  projects: Database
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  //   const CustomRightArrow = ({ onClick, ...rest }) => {
  //     const {
  //       onMove,
  //       carouselState: { currentSlide, deviceType },
  //     } = rest
  //     // onMove means if dragging or swiping in progress.
  //     return <button onClick={() => onClick()} />
  //   }

  //   const CustomDot = ({ index, onClick, active }) => {
  //     return (
  //       <button
  //         onClick={(e) => {
  //           onClick()
  //           e.preventDefault()
  //         }}
  //         className={classNames('custom-dot', {
  //           'custom-dot--active': active,
  //         })}
  //       >
  //         {React.Children.toArray(images)[index]}
  //       </button>
  //     )
  //   }

  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      //   customRightArrow={<CustomRightArrow />}
      showDots={true}
      renderDotsOutside={true}
      autoPlaySpeed={3000}
      autoPlay={!isMobile}
      centerMode={false}
      className=""
      containerClass="w-screen p-0 md:p-8 lg:p-16"
      dotListClass="dot-outside"
      draggable
      focusOnSelect={false}
      infinite={false}
      itemClass="mx-0 md:mx-8 lg:mx-16"
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      ssr={true}
      deviceType={isMobile ? 'mobile' : 'desktop'}
    >
      {materials.map((mat) => {
        return (
          <div
            key={mat.id}
            className="flex flex-col gap-6 text-black items-center md:mb-6"
          >
            <div className="rounded-full border-2 dark:border-8 border-gray-400 shadow-xl   bg-white h-36 w-36">
              <DoughnutComponent mat={mat} />
            </div>
            <div className="w-full bg-white rounded-t-3xl md:rounded-3xl border-2 dark:border-8 border-gray-300 shadow-xl  ">
              <div className="min-w-full md:min-w-[320px] w-auto">
                <div className="p-2 py-5 flex flex-col items-center">
                  <div className="whitespace-nowrap w-28 min-w-fit md:w-32 lg:w-48 bg-lightgreenBg rounded-full text-xl px-4 py-2 text-foreground mb-2 text-center">
                    {mat.material_name}
                  </div>

                  <div className="flex flex-col grow gap-4 justify-between items-center">
                    <MaterialsIcons projects={projects} />
                    <Link
                      href={{
                        pathname: 'projects',
                        query: {
                          materialName: mat.material_name,
                        },
                      }}
                      className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-full cursor-pointer shadow shadow-lg shadow-gray-500"
                    >
                      <span className="text-foreground text-2xl font-bold pb-1">
                        +
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Carousel>
  )
}

export default MultiCarousel
