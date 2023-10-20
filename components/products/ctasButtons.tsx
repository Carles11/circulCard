import DarkButtonWithHover from 'components/buttons/darkButtonWithHover'

const CtasButtons = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row justify-center mb-16">
      <DarkButtonWithHover href={undefined} btnText="TOTAL RESIDUOS 2023" />
      <DarkButtonWithHover href={undefined} btnText="TOTAL RESIDUOS 2024" />
    </div>
  )
}

export default CtasButtons
