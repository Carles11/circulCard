import { capitalizeFirstLetter } from 'utils/utils.service'

const GreenButtonWhiteTextWithHover = ({
  key,
  btnText,
}: {
  key: string | undefined
  btnText: string
}) => {
  console.log({ btnText })
  return (
    <button
      className="m-8 w-48 bg-lightgreenBg rounded-full text-xl px-4 py-2 text-foreground mb-2 hover:bg-btn-background-hover shadow-xl whitespace-nowrap"
      key={key}
    >
      {capitalizeFirstLetter(btnText)}
    </button>
  )
}

export default GreenButtonWhiteTextWithHover
