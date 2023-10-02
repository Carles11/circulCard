import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import Toaster from '../../../../components/toastComponent'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const new_password = String(formData.get('new_password'))
  console.log('AUTH-PASS-RESET-cookiiiiiiiiiiiiiiiiiiies', cookies())

  const supabase = createRouteHandlerClient({ cookies })

  console.log('AUTH-PASS-RESET-NEWPASSWORD', new_password)

  try {
    const { data, error } = await supabase.auth.updateUser({
      password: new_password,
    })

    console.log('AUTH-PASS-data----->', data)
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
  return NextResponse.redirect(`${requestUrl.origin}/`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  })
}
