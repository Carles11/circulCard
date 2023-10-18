import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import Toaster from 'components/toastComponent'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const new_password = String(formData.get('new_password'))

  const supabase = createRouteHandlerClient({ cookies })
  // console.log({ supabase })
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser()
  // console.log({ user })
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: new_password.trim(),
    })

    if (error) {
      console.error('Password update error:', error)
      Toaster(error)
      // Handle the error appropriately
    } else {
      // Handle successful password update
      // Update the authentication session on the client
    }
  } catch (error) {
    console.error('Unexpected error:', error)
    Toaster(error)
    // Handle unexpected errors
  }
  return NextResponse.redirect(`${requestUrl.origin}/login`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  })
}
