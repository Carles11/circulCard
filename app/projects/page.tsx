// @ts-nocheck
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from 'types/supabase'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import Loader from 'components/loader'
import DoughnutComponent from 'components/projects/doughnutComponent'
import RecycleHands from 'assets/images/icons/SVG/recycle-hands.svg'

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([])
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
          .select('*, materials(material_name)')

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
    return (
      <p className="text-white">
        <Loader />
      </p>
    )
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  console.log({ projects })
  return (
    <div className="w-full flex flex-col gap-16 items-center m-8">
      <div className="w-full flex flex-col items-center m-8">
        <Image
          src={RecycleHands}
          alt="The circulart recycling process"
          width={40}
          height={40}
        />
        <h1 className="text-white">RECICLAJE</h1>{' '}
      </div>

      <div className="flex flex-col md:flex-row gap-16 justify-between">
        {projects.map((proj) => {
          return (
            <div className="flex flex-col items-center gap-6">
              <div className="rounded-full border-8 border-gray-400 bg-white ">
                <DoughnutComponent proj={proj} />
              </div>
              <button className="bg-gray-400 rounded-3xl text-lg px-4 py-2 text-white mb-2 hover:bg-btn-background-hover">
                {proj.project_name.toUpperCase()}
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
