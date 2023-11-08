// @ts-nocheck
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from 'types/supabase'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import Loader from 'components/loader'
import DoughnutComponent from 'components/projects/doughnutComponent'
import DarkButtonWithHover from 'components/buttons/darkButtonWithHover'
import RecycleHands from 'assets/images/icons/SVG/recycle-hands.svg'
import RecycleWorld from 'assets/images/icons/SVG/recycle-green-world.svg'

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([])
  const searchParams = useSearchParams()
  const materialName = searchParams.get('materialName')

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter() // Initialize the useRouter hook

  const supabase = createClientComponentClient<Database>()

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
          .filter('materials.material_name', 'eq', materialName)
          .not('materials', 'is', null)
        // .eq('materials.material_name', materialName)

        if (error) {
          throw new Error(error.message)
        }

        setProjects(data || {})
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getProjects()
  }, [supabase])

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="w-full flex flex-col gap-16 items-center m-8">
      <div className="w-full flex flex-col items-center m-8">
        <Image
          src={RecycleHands}
          alt="The circulart recycling hands logo"
          width={75}
          height={75}
          className="hidden dark:block"
        />
        <Image
          className="block dark:hidden"
          src={RecycleWorld}
          alt="The circulart recycling world logo"
          width={75}
        />
        <h1>RECICLAJE</h1> <h2>{materialName}</h2>{' '}
      </div>

      <div className="flex flex-col md:flex-row gap-16 justify-between">
        {projects.map((proj) => {
          const projectID = proj.id
          const projectName = proj.project_name
          return (
            <div className="flex flex-col items-center gap-6">
              <div className="rounded-full border-2 dark:border-8 border-gray-400 shadow-xl   bg-foreground h-60 w-60">
                <DoughnutComponent proj={proj} materialName={materialName} />
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
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
