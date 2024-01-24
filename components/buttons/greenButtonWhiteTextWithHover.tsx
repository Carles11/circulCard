import { capitalizeFirstLetter } from 'utils/utils.service'

const GreenButtonWhiteTextWithHover = ({
  idAsKey,
  btnText,
  onPress,
}: {
  idAsKey?: string | undefined
  btnText: string
  onPress?: (event: React.MouseEvent<HTMLButtonElement>) => void
}) => {
  return (
    <button
      className="m-8 min-w-fit w-48 bg-lightgreenBg rounded-full text-xl text-foreground px-4 py-2 mb-2 hover:bg-btn-background-hover shadow-xl whitespace-nowrap"
      key={idAsKey}
      onClick={onPress}
    >
      {capitalizeFirstLetter(btnText)}
    </button>
  )
}

export default GreenButtonWhiteTextWithHover
