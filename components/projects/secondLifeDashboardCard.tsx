import RecycleGreenArrowsCard from 'components/cards/recycleGreenArrowsCard'
import RecycleBins from 'assets/images/icons/papelera-de-reciclaje.png'
const SecondLifeDashboardCard = () => {
  return (
    <RecycleGreenArrowsCard icon={RecycleBins}>
      <div className="flex flex-col  text-right mr-6 md:mr-20 items-end mt-6 md:mt-20">
        <div className="flex flex-col mr-2">
          <h1 className="z-1 text-gray-600 leading-8">Proyectos</h1>
          <h3 className="z-1 text-gray-600">segunda vida</h3>
        </div>
      </div>
    </RecycleGreenArrowsCard>
  )
}

export default SecondLifeDashboardCard
