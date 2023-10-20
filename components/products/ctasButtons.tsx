import DarkButtonWithHover from 'components/buttons/darkButtonWithHover'

const CtasButtons = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-center mb-16">
      <DarkButtonWithHover href={undefined} btnText="Total residuos 2023" />
      <DarkButtonWithHover href={undefined} btnText="Total residuos 2024" />
    </div>
  )
}

export default CtasButtons
