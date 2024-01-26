'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export const CheckIfUserIsAdmin = () => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const [userIsAdmin, setUserIsAdmin] = useState<boolean>(false)
  const [userName, setUserName] = useState<string | undefined>('')

  useEffect(() => {
    const userIsAdmin = async () => {
      const { data: profiles, error } = await supabase
        .from('profiles')
        .select('username, is_admin')

      const profileIsAdmin = profiles ? profiles[0].is_admin : false
      const userName = profiles ? profiles[0].username : false
      setUserIsAdmin(profileIsAdmin)
      setUserName(userName)
    }

    userIsAdmin()
  }, [supabase, router])

  return { userIsAdmin, userName }
}

// THROWING ERROR INVALID HOOK CALL WHEN USED. Need to check
// export const CheckIfSessionIsActive = () => {
//   const supabase = createClientComponentClient()
//   const router = useRouter()

//   useEffect(() => {
//     const checkUser = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession()

//       if (!session) {
//         router.push('/unauthenticated') // Use router.push instead of redirect
//       }
//     }

//     checkUser()
//   }, [supabase, router])

//   return
// }
