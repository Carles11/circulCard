import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  const requestUrl = new URL(request.url)
  const formData = await request.formData()
  const new_password = String(formData.get('new_password'))
  const supabase = createRouteHandlerClient({ cookies })

  console.log('AUTH-PASS-RESET-NEWPASSWORD', new_password)

  const { error } = await supabase.auth.updateUser({
    password: new_password,
  })
  console.log('AUTH-PASS-ERROR----->', error)
  return NextResponse.redirect(`${requestUrl.origin}/`, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  })
}
