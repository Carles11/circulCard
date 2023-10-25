import { capitalizeFirstLetter } from 'utils/utils.service'

const GreenButtonWhiteTextWithHover = ({
  key,
  btnText,
}: {
  key: string | undefined
  btnText: string
}) => {
  return (
    <button
      className="m-8 w-48 bg-lightgreenBg rounded-full text-xl text-foreground px-4 py-2 mb-2 hover:bg-btn-background-hover shadow-xl whitespace-nowrap"
      key={key}
    >
      {capitalizeFirstLetter(btnText)}
    </button>
  )
}

export default GreenButtonWhiteTextWithHover
