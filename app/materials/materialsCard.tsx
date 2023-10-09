import type { Database } from 'types/supabase'

const MaterialsCard = ({ materials }: { materials: Database }) => {
  return (
    <div className="flex flex-row items-center justify-between m-16 gap-16">
      {materials.map((mat) => {
        return (
          <div>
            <div className="text-white"> {mat.percentage}</div>
            <div className="flex"></div>
          </div>
        )
      })}
    </div>
  )
}

export default MaterialsCard
