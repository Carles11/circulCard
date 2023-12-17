// @ts-nocheck
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from 'types/supabase'
import { isMobile } from 'react-device-detect'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import HeaderInternalPage from 'components/headers/headerInternalPage'
import PieComponent from 'components/materials/pieComponent'
import { ScrollIntoView } from 'utils/autoScrollings'
import CircleList from 'components/circleList'

import Loader from 'components/loader'
import DoughnutComponent from 'components/projects/doughnutComponent'
import DarkButtonWithHover from 'components/buttons/darkButtonWithHover'
import RecycleHands from 'assets/images/icons/SVG/recycle-hands.svg'
import RecycleWorld from 'assets/images/icons/SVG/recycle-green-world.svg'

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([])
  const [filteredProjects, setFilteredProjects] = useState<any[]>([])
  const [materials, setMaterials] = useState<any[]>([])
  const [currentMaterial, setCurrentMaterials] = useState<string>('envases')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook

  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const { data, error } = await supabase
          .from('materials')
          .select('id, material_name, percentage, color')

        if (error) {
          throw new Error(error.message)
        }
        setMaterials(data || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getMaterials()
  }, [supabase, currentMaterial, setCurrentMaterials])

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        router.push('/unauthenticated') // Use router.push instead of redirect
      }
    }

    checkUser()
  }, [supabase, router])

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*, materials(id, material_name)')
          .filter('materials.material_name', 'eq', currentMaterial)
        // .not('materials', 'is', null)
        // .eq('materials.material_name', materialName)

        if (error) {
          throw new Error(error.message)
        }
        const filterMatRelated = projects.filter(
          (proj) => proj.materials.length > 0
        )

        setProjects(data || {})
        setFilteredProjects(filterMatRelated || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getProjects()
  }, [supabase, currentMaterial, setCurrentMaterials])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  const handleTabSelection = (option) => {
    setCurrentMaterials(option)
    // ScrollIntoView('project-card')
  }

  return (
    <div className="w-full flex flex-col gap-16 items-center m-8">
      <HeaderInternalPage
        iconDark={RecycleHands}
        iconLight={RecycleWorld}
        title="Segunda vida"
        subTitle="residuos por sectores"
      />
      <p className="text-xl md:text-2xl mx-2 md:mx-8 px-2 md:px-8">
        Distribución por sectores de la cantidad total de residuos que hemos
        reciclado.
      </p>
      <div
        className={`w-full flex items-center justify-around ${
          isMobile && 'flex-col'
        }`}
      >
        <div className="flex flex-col p-4">
          <CircleList items={projects} />
        </div>
        <div className="w-96 h-96 md:w-[44rem] md:h-[44rem]">
          <PieComponent projects={projects} />
        </div>
      </div>
      {/*   <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

         <p className="text-xl md:text-2xl mx-2 md:mx-8 px-2 md:px-8">
        Comprueba en qué proporción y para qué sectores reutilizamos cada
        material que hemos conseguido recuperar en tu empresa.
      </p>
      <div className="flex flex-col gap-8 items-center p-6 border-2 border-lightgreenBg rounded rounded-md mb-8 m-2">
        <div className=" flex flex-wrap gap-2 md:gap-6">
          {materials.map((option, i) => {
            return (
              <div
                key={`option_${i}`}
                className="transition ease-in-out delay-150 px-2 py-1 border  border-lightgreenBg rounded-md hover:scale-125 hover:cursor-pointer"
                onClick={() => {
                  handleTabSelection(option.material_name)
                }}
              >
                <h6>{option.material_name}</h6>
              </div>
            )
          })}
        </div>
        <h2>{currentMaterial.toUpperCase()}</h2>
        <div className="flex flex-col md:flex-row gap-16 justify-between max-w-full">
          {filteredProjects?.map((proj) => {
            const projectID = proj.id
            const projectName = proj.project_name
            return (
              <div
                key={`option_${projectID}`}
                className="flex flex-col items-center gap-6"
              >
                <div className="rounded-full border-2 dark:border-8 border-gray-400 shadow-xl   bg-foreground h-60 w-60">
                  <DoughnutComponent
                    proj={proj}
                    materialName={currentMaterial}
                  />
                </div>
                <Link
                  key={proj.id}
                  href={{
                    pathname: 'projects/second-life',
                    query: {
                      projectID: projectID,
                      projectName: projectName,
                    },
                  }}
                >
                <DarkButtonWithHover
                    href={undefined}
                    btnText={proj.project_name}
                  /> 
                  <h2 id="project-card">{proj.project_name}</h2>
                </Link>
              </div>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Projects
