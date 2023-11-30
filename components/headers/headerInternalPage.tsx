import Image from 'next/image'

// interface MaterialsProductProps {
//   icon: string | StaticImageData
//   productName: string | null
// }

const HeaderInternalPage = ({
  iconDark,
  iconLight,
  title,
  subTitle,
}: {
  iconDark: string
  iconLight: string
  title: string
  subTitle?: string
}) => {
  return (
    <div className="m-8 flex flex-col items-center">
      {/*SWITCH LOGO DEPENDING ON THEME*/}
      <Image
        src={iconDark}
        alt="The circulart recycling logo"
        width={75}
        height={75}
        className="hidden dark:block"
      />
      <Image
        src={iconLight}
        alt="The circulart recycling logo"
        width={75}
        height={75}
        className="block dark:hidden"
      />
      <h1 className="mt-4">{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  )
}

export default HeaderInternalPage
